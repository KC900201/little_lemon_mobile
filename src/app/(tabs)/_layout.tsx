import { usePathname } from "expo-router"
import Drawer from "expo-router/drawer"
import { Alert } from "react-native"

import { Header } from "@/shared/ui/header"
import { SideMenuContent } from "@/shared/ui/side-menu-content"

function AppHeader() {
	const pathname = usePathname()

	return (
		<Header
			showBack={pathname === "/reservations/success"}
			onBasketPress={() => Alert.alert("You clicked the basket")}
		/>
	)
}

export default function TabsDrawerLayout() {
	return (
		<Drawer
			drawerContent={(props) => <SideMenuContent {...props} />}
			screenOptions={{ header: () => <AppHeader />, drawerType: "front" }}
		>
			<Drawer.Screen name="(bottom)" options={{ title: "Little Lemon" }} />
		</Drawer>
	)
}
