import { Karla_400Regular, Karla_500Medium, Karla_700Bold } from "@expo-google-fonts/karla"
import {
	MarkaziText_400Regular,
	MarkaziText_500Medium,
	useFonts,
} from "@expo-google-fonts/markazi-text"
import { QueryClientProvider } from "@tanstack/react-query"
import { Stack } from "expo-router"
import { SafeAreaProvider } from "react-native-safe-area-context"

import { queryClient } from "@/shared/lib/query-client"

import "@/global.css"

export const unstable_settings = { initialRouteName: "(tabs)" }

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

	if (!fontsLoaded) return null

	return (
		<SafeAreaProvider>
			<QueryClientProvider client={queryClient}>
				<Stack screenOptions={{ headerShown: false }}>
					<Stack.Screen name="(tabs)" />
					<Stack.Screen name="(auth)" />
				</Stack>
			</QueryClientProvider>
		</SafeAreaProvider>
	)
}
