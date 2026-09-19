import { useState } from "react"
import { Text, TextInput, View } from "react-native"

import { Button } from "@/shared/ui/button"
import { useAvailableSlots } from "../hooks/use-available-slots"
import { useReservationForm } from "../hooks/use-reservation-form"
import { PartySizeStepper } from "./party-size-stepper"
import { TimeSlotPicker } from "./time-slot-picker"

interface ReservationFormProps {
	date: string
}

export function ReservationForm({ date }: ReservationFormProps) {
	const { data: slots } = useAvailableSlots(date)
	const { draft, isValid, isPending, error, submit } = useReservationForm()

	const [name, setName] = useState("")
	const [phone, setPhone] = useState("")

	return (
		<View className="gap-4 p-4">
			<PartySizeStepper value={draft.partySize} onChange={draft.setPartySize} />
			<TimeSlotPicker slots={slots ?? []} selectedId={draft.slotId} onSelect={draft.setSlot} />
			<TextInput
				accessibilityLabel="Full Name"
				className="card-surface p-3 font-body"
				placeholder="Full name"
				value={name}
				onChangeText={setName}
			/>
			<TextInput
				accessibilityLabel="Phone number"
				className="card-surface p-3 font-body"
				placeholder="Phone number"
				keyboardType="phone-pad"
				value={phone}
				onChangeText={setPhone}
			/>
			{error ? (
				<Text className="font-body text-red-600">Something went wrong. Please try again.</Text>
			) : null}
			<Button
				label="Reserve"
				disabled={isValid || !name || !phone || isPending}
				onPress={() => submit({ name, phone })}
			/>
		</View>
	)
}
