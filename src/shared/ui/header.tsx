import { useNavigation, useRouter } from "expo-router"
import { DrawerActions } from "expo-router/react-navigation"
import { CircleChevronLeft } from "lucide-react-native"
import { Pressable, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

// Assets
import Basket from "@/assets/icons/basket.svg"
import HamburgerMenu from "@/assets/icons/hamburger-menu.svg"
import Logo from "@/assets/icons/Logo.svg"
import { colors } from "../theme/colors"

interface HeaderProps {
	showBack?: boolean
	onMenuPress?: () => void
	onBasketPress?: () => void
}

export function Header({ showBack, onMenuPress, onBasketPress }: HeaderProps) {
	const router = useRouter()
	const navigation = useNavigation()
	const insets = useSafeAreaInsets()
	const openMenu = () => navigation.dispatch(DrawerActions.openDrawer())

	return (
		<View
			style={{ paddingTop: insets.top }}
			className="flex-row items-center justify-between bg-white px-4 pb-2"
		>
			<Pressable
				accessibilityRole="button"
				accessibilityLabel={showBack ? "Go back" : "Open menu"}
				onPress={showBack ? () => router.back() : (onMenuPress ?? openMenu)}
			>
				{showBack ? (
					<CircleChevronLeft size={24} color={colors.primaryGreen} />
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
