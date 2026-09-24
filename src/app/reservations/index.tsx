import { Alert, View } from "react-native"

import { ReservationForm } from "@/features/reservations/components/reservation-form"

export default function ReservationsRoute() {
	const date = new Date().toISOString().slice(0, 10)

	const submit = () => {
		Alert.alert("Submitted form")
	}

	return (
		<View className="flex-1 bg-white">
			<ReservationForm date={date} />
		</View>
	)
}
