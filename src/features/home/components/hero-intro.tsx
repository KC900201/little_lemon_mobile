import { useRouter } from "expo-router"
import { Image, Text, View } from "react-native"

// Assets
import HeroImage from "@/assets/images/restaurantfood.jpg"

import { Button } from "@/shared/ui/button"

export function HeroIntro() {
	const router = useRouter()

	const onHandleRoute = () => {
		router.push("/reservations")
	}

	return (
		<View className="bg-secondary-dark px-4 pb-6 pt-4">
			<View className="flex-row items-center gap-3">
				<View className="flex-1">
					<Text className="font-display text-4xl text-primary-yellow">Little Lemon</Text>
					<Text className="font-display text-xl text-white">Chicago</Text>
					<Text className="font-body text-white">
						We are a family owned Mediterranean restaurant, focused on traditional recipes served
						with a modern twist.
					</Text>
				</View>

				<Image source={HeroImage} className="h-32 w-28 rounded-lg" resizeMode="cover" />
			</View>

			<Button label="Reserve a table" onPress={onHandleRoute} />
		</View>
	)
}
