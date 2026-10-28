// Setup connection between app and supabase clients

import AsyncStorage from "@react-native-async-storage/async-storage"
import { createClient } from "@supabase/supabase-js"
import { AppState } from "react-native"

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL ?? ""
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ?? ""

// Setup client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true, // auto refresh to maintain user session
    persistSession: true, // set user to auto login 
    detectSessionInUrl: false
  }
})

AppState.addEventListener("change", (state) => {
  if (state === "active") supabase.auth.startAutoRefresh()
  else supabase.auth.stopAutoRefresh()
})