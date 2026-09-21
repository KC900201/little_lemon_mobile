import { Button } from "@/shared/ui/button"
import { useRouter } from "expo-router"
import { Text, View } from "react-native"

export function HeroIntro() {
	const router = useRouter()

	return (
		<View className="gap-3 bg-primary-green p-6">
			<Text className="font-display text-4xl text-primary-yellow">Little Lemon</Text>
			<Text className="font-display text-xl text-white">Chicago</Text>
			<Text className="font-body text-white">
				We are a family owned Mediterranean restaurant, focused on traditional recipes served with a
				modern twist.
			</Text>
			<Button label="Reserve a table" onPress={() => router.push("/reservations")} />
		</View>
	)
}
