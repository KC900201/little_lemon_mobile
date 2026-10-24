import { Modal, Pressable, Text, View } from "react-native"

import { ReservationFormValues } from "../schema/reservation-schema"

interface Props {
	visible: boolean
	values: ReservationFormValues | null
	onCancel: () => void
	onConfirm: () => void
}

export function ConfirmationModal({ visible, values, onCancel, onConfirm }: Props) {
	if (!values) return null

	const rows: [string, string][] = [
		["Transaction Date", new Date().toISOString().slice(0, 10)],
		["Visitation Date", values.date],
		["Visitation Time", values.time],
		["Number of people", values.partySize],
		["Name", values.name],
		["Phone number", values.phone],
		["Email address", values.email],
		["Course reservation", values.courseReservation || "none (table only)"],
		["Special request", values.specialRequest || "-"],
	]

	return (
		<Modal visible={visible} transparent animationType="fade" onRequestClose={onCancel}>
			<View className="flex-1 items-center justify-center bg-black/40 px-6">
				<View className="w-full rounded-lg bg-white p-4">
					{/* Confirmation message */}
					<View className="mb-3 rounded bg-secondary-dark p-3">
						<Text className="font-body-bold text-white">Please confirm your reservation</Text>
					</View>

					{/* Reservation information */}
					<Text className="mb-2 font-body-bold text-secondary-dark">
						Your reservation information:
					</Text>
					<View className="mb-4 rounded border border-secondary-dark/40 p-3">
						{rows.map(([label, val]) => (
							<View key={label} className="mb-1 flex-row justify-between">
								<Text className="text-xs text-secondary-dark">{label}:</Text>
								<Text className="font-body-bold text-xs text-secondary-dark">{val}</Text>
							</View>
						))}
					</View>

					{/* Inquiry */}
					<Text className="mb-3 text-center font-body-bold text-secondary-dark">
						Are you sure you want to proceed?
					</Text>

					<View className="flex-row items-center justify-start gap-6">
						<Pressable
							onPress={onConfirm}
							className="flex-1 rounded-full bg-primary-yellow px-4 py-3"
						>
							<Text className="text-center font-body-bold text-secondary-dark">Checkout</Text>
						</Pressable>
						<Pressable
							onPress={onCancel}
							className="flex-1 rounded-full bg-secondary-dark px-4 py-3"
						>
							<Text className="text-center font-body-bold text-white">Cancel</Text>
						</Pressable>
					</View>
				</View>
			</View>
		</Modal>
	)
}
