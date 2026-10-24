import { Karla_400Regular, Karla_500Medium, Karla_700Bold } from "@expo-google-fonts/karla"
import {
	MarkaziText_400Regular,
	MarkaziText_500Medium,
	useFonts,
} from "@expo-google-fonts/markazi-text"
import { QueryClientProvider } from "@tanstack/react-query"
import { Stack } from "expo-router"
import { useEffect } from "react"
import { SafeAreaProvider } from "react-native-safe-area-context"

import { queryClient } from "@/shared/lib/query-client"

import { useAuthStore } from "@/features/auth/store/auth-store"
import "@/global.css"

/**
 * To-do:
 * [x] Repositon "reservation button" in landing page, header section
 * [x] Add tabs layout
 * [ ] Incorporate supabase library into project (after backend setup)
 */

export default function RootLayout() {
	const [fontsLoaded] = useFonts({
		MarkaziText: MarkaziText_400Regular,
		"MarkaziText-Medium": MarkaziText_500Medium,
		Karla: Karla_400Regular,
		"Karla-Medium": Karla_500Medium,
		"Karla-Bold": Karla_700Bold,
	})

	const isSignedIn = useAuthStore((s) => s.isSignedIn)
	const isReady = useAuthStore((s) => s.isReady)
	const setReady = useAuthStore((s) => s.setReady)

	useEffect(() => {
		// TODO: restore the stored session here, then mark ready
		setReady()
	}, [setReady])

	if (!fontsLoaded || !isReady) return null

	return (
		<SafeAreaProvider>
			<QueryClientProvider client={queryClient}>
				<Stack screenOptions={{ headerShown: false }}>
					<Stack.Protected guard={!isSignedIn}>
						<Stack.Screen name="(auth)" />
					</Stack.Protected>
					<Stack.Protected guard={isSignedIn}>
						<Stack.Screen name="(tabs)" />
					</Stack.Protected>
				</Stack>
			</QueryClientProvider>
		</SafeAreaProvider>
	)
}
