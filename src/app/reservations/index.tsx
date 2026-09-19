import { ReservationForm } from "@/features/reservations/components/reservation-form"

export default function ReservationsRoute() {
	const date = new Date().toISOString().slice(0, 10)

	return <ReservationForm date={date} />
}
