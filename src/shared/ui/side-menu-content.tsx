import { useRouter } from "expo-router"
import { DrawerContentComponentProps } from "expo-router/drawer"
import { Pressable, Text, View } from "react-native"

const items = [
	{ label: "Home", href: "/" },
	{ label: "Reservations", href: "/reservations" },
] as const

export function SideMenuContent({ navigation }: DrawerContentComponentProps) {
	const router = useRouter()

	return (
		<View className="flex-1 bg-white pt-16">
			{items.map((item) => (
				<Pressable
					key={item.href}
					className="px-4 py-3"
					onPress={() => {
						navigation.closeDrawer()
						router.navigate(item.href)
					}}
				>
					<Text className="font-body text-base text-secondary-dark">{item.label}</Text>
				</Pressable>
			))}
		</View>
	)
}
