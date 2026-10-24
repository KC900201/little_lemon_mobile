import { useLocalSearchParams, useRouter } from "expo-router"
import { Pressable, Text, View } from "react-native"

export function ReservationSuccessScreen() {
	const router = useRouter()
	const params = useLocalSearchParams<{ phone?: string }>()

	return (
		<View className="flex-1 bg-white px-6 pt-6">
			<View className="mb-4 rounded bg-secondary-dark p-3">
				<Text className="font-heading text-lg text-primary-yellow">Reservation completed</Text>
			</View>

			<Text className="mb-3 font-body-bold text-secondary-dark">Your reservation is confirmed</Text>

			{/* Message */}
			<View className="rounded-lg border border-primary-yellow p-4">
				<Text className="text-sm text-secondary-dark">
					Thank you for booking a reservation with us. For further customization in your booking,
					please feel free to contact us via our contact number{" "}
					{params.phone ? `(${params.phone})` : ""}.
				</Text>
			</View>

			{/* Action buttons */}
			<View className="mt-6 gap-3">
				<Pressable className="rounded-full bg-primary-yellow px-4 py-3">
					<Text className="text-center font-body-bold text-secondary-dark">Add to calendar</Text>
				</Pressable>
				<Pressable
					onPress={() => router.replace("/")}
					className="rounded-full bg-secondary-dark px-4 py-3"
				>
					<Text className="text-center font-body-bold text-white">Home</Text>
				</Pressable>
			</View>
		</View>
	)
}
