import * as ImagePicker from "expo-image-picker"
import { useState } from "react"

import { useAuth } from "@/context/auth-context"
import { Alert } from "react-native"
import { uploadAvatar } from "../api/avatar"


export function useAvatarUpload() {
  const { user } = useAuth()
  const [isUploading, setIsUploading] = useState(false)

  const pickAndUpload = async () => {
    if (!user) return
    const perm = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (!perm.granted) {
      Alert.alert("Permission needed", "Please allow photo access to set a profile picture")
      return
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.7
    })

    if (result.canceled) return

    try {
      setIsUploading(true)
      await uploadAvatar(user.id, result.assets[0].uri)
    } catch (e) {
      Alert.alert("Upload failed", e instanceof Error ? e.message : "Please try again.")
    } finally {
      setIsUploading(false)
    }
  }

  return { pickAndUpload, isUploading }
}