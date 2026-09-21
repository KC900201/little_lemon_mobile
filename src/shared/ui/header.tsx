import { useRouter } from "expo-router"
import { Pressable, Text, View } from "react-native"

// Assets
import Basket from "@assets/icons/basket.svg"
import HamburgerMenu from "@assets/icons/hamburger-menu.svg"
import Logo from "@assets/icons/Logo.svg"

interface HeaderProps {
	showBack?: boolean
	onMenuPress?: () => void
	onBasketPress?: () => void
}

export function Header({ showBack, onMenuPress, onBasketPress }: HeaderProps) {
	const router = useRouter()

	return (
		<View className="flex-row items-center justify-between border-b border-secondary-gray">
			<Pressable
				accessibilityRole="button"
				accessibilityLabel={showBack ? "Go back" : "Open menu"}
				onPress={showBack ? () => router.back() : onMenuPress}
			>
				{showBack ? (
					<Text className="text-2xl text-secondary-dark">←</Text>
				) : (
					<HamburgerMenu width={24} height={24} />
				)}
			</Pressable>
			<Logo width={140} height={28} />
			<Pressable
				accessibilityRole="button"
				accessibilityLabel="View basket"
				onPress={onBasketPress}
			>
				<Basket width={24} height={24} />
			</Pressable>
		</View>
	)
}
