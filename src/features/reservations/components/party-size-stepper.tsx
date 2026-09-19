import { Pressable, Text, View } from "react-native"

interface PartySizeStepperProps {
	value: number
	onChange: (value: number) => void
	min?: number
	max?: number
}

export function PartySizeStepper({ value, onChange, min = 1, max = 10 }: PartySizeStepperProps) {
	return (
		<View className="flex-row items-center gap-4">
			<Pressable
				accessibilityRole="button"
				accessibilityLabel="Decrease party size"
				disabled={value <= min}
				onPress={() => onChange(value - 1)}
			>
				<Text className="font-body-bold text-2xl">-</Text>
			</Pressable>
			<Text className="font-body-bold text-lg">{value}</Text>
			<Pressable
				accessibilityRole="button"
				accessibilityLabel="Increase party size"
				disabled={value >= max}
				onPress={() => onChange(value + 1)}
			>
				<Text className="font-body-bold text-2xl">+</Text>
			</Pressable>
		</View>
	)
}
