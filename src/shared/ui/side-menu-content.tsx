import { DrawerContentComponentProps } from "expo-router/drawer"
import { Pressable, Text, View } from "react-native"

export function SideMenuContent(props: DrawerContentComponentProps) {
	const items = [
		{ label: "Home", route: "index" },
		{ label: "Reservations", route: "reservations/index" },
	]

	return (
		<View className="flex-1 bg-white pt-16">
			{items.map((item) => (
				<Pressable
					key={item.route}
					className="px-4 py-3"
					onPress={() => props.navigation.navigate(item.route)}
				>
					<Text className="font-body text-base text-secondary-dark">{item.label}</Text>
				</Pressable>
			))}
		</View>
	)
}
