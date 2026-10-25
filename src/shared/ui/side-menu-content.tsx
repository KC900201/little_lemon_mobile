import { useRouter } from "expo-router"
import { DrawerContentComponentProps } from "expo-router/drawer"
import { Pressable, Text, View } from "react-native"

import { useAuth } from "@/context/auth-context"
import { useSignOut } from "@/features/profile/hooks/useSignOut"

import { Avatar } from "@/shared/ui/avatar"
import { Button } from "@/shared/ui/button"

const MENU_ITEMS = [
	{ label: "Home", href: "/" },
	{ label: "Reservations", href: "/reservations" },
	{ label: "Profile", href: "/profile" },
] as const

export function SideMenuContent({ navigation }: DrawerContentComponentProps) {
	const router = useRouter()
	const { user } = useAuth()
	const confirmSignOut = useSignOut()

	const go = (href: (typeof MENU_ITEMS)[number]["href"]) => {
		navigation.closeDrawer()
		router.navigate(href)
	}

	return (
		<View className="flex-1 bg-white pb-8 pt-16">
			<Pressable
				className="mb-4 flex-row items-center gap-3 border-b border-secondary-gray px-4 pb-4"
				onPress={() => go("/profile")}
			>
				<Avatar uri={user?.profileImage} name={user?.name} size={48} />
				<View>
					<Text className="font-body-bold text-base text-secondary-dark">
						{user?.name || "Guest"}
					</Text>
					<Text className="font-body text-sm text-primary-green">{user?.email}</Text>
				</View>
			</Pressable>

			<View className="flex-1">
				{MENU_ITEMS.map((item) => (
					<Pressable key={item.href} className="px-4 py-3" onPress={() => go(item.href)}>
						<Text className="font-body text-base text-secondary-dark">{item.label}</Text>
					</Pressable>
				))}
			</View>

			<View className="px-4">
				<Button
					variant="destructive"
					label="Sign out"
					onPress={() => {
						navigation.closeDrawer()
						confirmSignOut()
					}}
				/>
			</View>
		</View>
	)
}
