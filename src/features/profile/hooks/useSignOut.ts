import { Alert } from "react-native"

import { useAuth } from "@/context/auth-context"

export function useSignOut() {
    const { signOut } = useAuth()

    return () =>
        Alert.alert("Sign out", "Are you sure you want to sign out?", [
            { text: "Cancel", style: "cancel" },
            {
                text: "Sign out",
                style: "destructive",
                onPress: () => signOut().catch((e) => Alert.alert("Error", e.message)),
            },
        ])
}