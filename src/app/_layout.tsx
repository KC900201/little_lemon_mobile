import { Karla_400Regular, Karla_500Medium, Karla_700Bold } from "@expo-google-fonts/karla"
import {
	MarkaziText_400Regular,
	MarkaziText_500Medium,
	useFonts,
} from "@expo-google-fonts/markazi-text"
import { QueryClientProvider } from "@tanstack/react-query"
import { Drawer } from "expo-router/drawer"
import { Alert } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"

import { queryClient } from "@/shared/lib/query-client"

import { Header } from "@/shared/ui/header"
import { SideMenuContent } from "@/shared/ui/side-menu-content"

import "@/global.css"

export default function RootLayout() {
	const [fontsLoaded] = useFonts({
		MarkaziText: MarkaziText_400Regular,
		"MarkaziText-Medium": MarkaziText_500Medium,
		Karla: Karla_400Regular,
		"Karla-Medium": Karla_500Medium,
		"Karla-Bold": Karla_700Bold,
	})

	if (!fontsLoaded) return null

	const onClickBasket = () => {
		Alert.alert("You clicked the basket")
	}

	return (
		<SafeAreaProvider>
			<QueryClientProvider client={queryClient}>
				<Drawer
					drawerContent={(props) => <SideMenuContent {...props} />}
					screenOptions={{
						header: (props) => (
							<Header showBack={props.route.name !== "index"} onBasketPress={onClickBasket} />
						),
						drawerType: "front",
					}}
				>
					<Drawer.Screen name="index" options={{ title: "Home" }} />
					<Drawer.Screen name="reservation/index" options={{ title: "Reservations" }} />
				</Drawer>
			</QueryClientProvider>
		</SafeAreaProvider>
	)
}
