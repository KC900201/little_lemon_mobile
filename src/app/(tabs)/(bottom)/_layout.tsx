import { Tabs } from "expo-router"
import { House, UtensilsCrossed } from "lucide-react-native"

import { colors } from "@/shared/theme/colors"

export default function BottomTabsLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: colors.primaryGreen,
				tabBarInactiveTintColor: colors.secondaryDark,
				tabBarActiveBackgroundColor: colors.secondaryPeach,
				tabBarStyle: { backgroundColor: colors.secondaryGray },
				tabBarLabelStyle: { fontFamily: "Karla-Medium" },
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ color, size }) => <House color={color} size={size} />,
				}}
			/>
			<Tabs.Screen
				name="reservations"
				options={{
					title: "Reservations",
					tabBarIcon: ({ color, size }) => <UtensilsCrossed color={color} size={size} />,
				}}
			/>
		</Tabs>
	)
}
