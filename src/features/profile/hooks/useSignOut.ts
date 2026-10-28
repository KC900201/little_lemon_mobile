import { Alert } from "react-native"

import { useAuth } from "@/context/auth-context"
import { router } from "expo-router"

export function useSignOut() {
    const { signOut } = useAuth()

    return () =>
        Alert.alert("Sign out", "Are you sure you want to sign out?", [
            { text: "Cancel", style: "cancel" },
            {
                text: "Sign out",
                style: "destructive",
                onPress: async () => {
                    try {
                        await signOut()
                        router.replace("/login")
                    } catch (e) {
                        Alert.alert("Error", e instanceof Error ? e.message : "Sign out failed")
                    }
                } ,
            },
        ])
}