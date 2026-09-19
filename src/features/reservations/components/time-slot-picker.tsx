import { View } from "react-native"

import { PillChip } from "@/shared/ui/pill-chip"
import { TimeSlot } from "../types"

interface TimeSlotPickerProps {
	slots: TimeSlot[]
	selectedId: string | null
	onSelect: (id: string) => void
}

export function TimeSlotPicker({ slots, selectedId, onSelect }: TimeSlotPickerProps) {
	return (
		<View className="flex-row flex-wrap gap-2">
			{slots.map((slot) => (
				<PillChip
					key={slot.id}
					label={slot.time}
					selected={slot.id === selectedId}
					onPress={slot.available ? () => onSelect(slot.id) : undefined}
				/>
			))}
		</View>
	)
}
