import { File } from "expo-file-system"

import { supabase } from "@/lib/supabase/client"

export async function uploadAvatar(userId: string, uri: string) {
  const buffer = await new File(uri).arrayBuffer()
  const path = `${userId}/avatar.jpg`

  const { error } = await supabase.storage
    .from("avatars")
    .upload(path, buffer, { contentType: "image/jpeg", upsert: true })
  
  if (error) throw error

  const { data } = supabase.storage.from("avatars").getPublicUrl(path)
  // Cache-bust, because the path is reused
  const url = `${data.publicUrl}?t=${Date.now()}`

  const { error: updateError } = await supabase.auth.updateUser({ data: { avatar_url: url }})

  if (updateError) throw updateError

  return url
}