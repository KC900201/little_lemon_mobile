import { useRouter } from "expo-router"
import { View } from "react-native"

import { useLastReservationStore } from "../store/last-reservation-store"

import { Button } from "@/shared/ui/button"
import { SectionTitle } from "@/shared/ui/section-title"

export function ReservationSuccessScreen() {
	const router = useRouter()
	const reservation = useLastReservationStore((s) => s.reservation)

	// Guard: user navigated here directly without
	if (!reservation) {
		router.replace("/reservations")
		return null
	}

	return (
		<View className="flex-1 items-center justify-center gap-4 bg-white p-6">
			<SectionTitle>You're all set!</SectionTitle>
			<Button label="Back to menu" onPress={() => router.replace("/")} />
		</View>
	)
}
