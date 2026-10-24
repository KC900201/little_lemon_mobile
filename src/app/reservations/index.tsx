import { router } from "expo-router"
import { View } from "react-native"

import { ReservationForm } from "@/features/reservations/components/reservation-form"

export default function ReservationsRoute() {
	const date = new Date().toISOString().slice(0, 10)

	return (
		<View className="flex-1 bg-white">
			<ReservationForm
				date={date}
				onConfirmed={(values) => {
					router.replace({
						pathname: "/reservations/success",
						params: { phone: values.phone },
					})
				}}
			/>
		</View>
	)
}
