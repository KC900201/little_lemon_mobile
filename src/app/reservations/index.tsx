import { Alert, View } from "react-native"

import { ReservationForm } from "@/features/reservations/components/reservation-form"
import { Header } from "@/shared/ui/header"

export default function ReservationsRoute() {
	const date = new Date().toISOString().slice(0, 10)

	const submit = () => {
		Alert.alert("Submitted form")
	}

	return (
		<View className="mt-10 flex-1 bg-white">
			<Header showBack />
			<ReservationForm date={date} />
			{/* <FooterActionBar>
				<Button label="Reserve a table" onPress={submit} />
			</FooterActionBar> */}
		</View>
	)
}
