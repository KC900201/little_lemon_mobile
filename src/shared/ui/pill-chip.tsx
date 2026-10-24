import { Pressable, Text } from "react-native"

interface PillChipProps {
	label: string
	selected?: boolean
	onPress?: () => void
}

export function PillChip({ label, selected, onPress }: PillChipProps) {
	return (
		<Pressable
			accessibilityRole="button"
			accessibilityState={{ selected: !!selected }}
			onPress={onPress}
			className={`chip-pill ${selected ? "bg-primary-green" : "bg-secondary-gray"}`}
		>
			<Text className={`font-bold ${selected ? "text-white" : "text-secondary-dark"}`}>
				{label}
			</Text>
		</Pressable>
	)
}
