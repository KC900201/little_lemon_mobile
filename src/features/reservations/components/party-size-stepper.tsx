import { Pressable, Text, View } from "react-native"

interface PartySizeStepperProps {
	value: number
	onChange: (value: number) => void
	min?: number
	max?: number
}

interface StepperButtonProps {
	label: string
	onPress: () => void
	disabled?: boolean
}

function StepperButton({ label, onPress, disabled }: StepperButtonProps) {
	return (
		<Pressable
			accessibilityRole="button"
			disabled={disabled}
			onPress={onPress}
			className={`h-8 w-8 items-center justify-center rounded-full border border-secondary-dark ${disabled ? "opacity-30" : ""}`}
		>
			<Text className="font-body-bold text-lg">{label}</Text>
		</Pressable>
	)
}

export function PartySizeStepper({ value, onChange, min = 1, max = 10 }: PartySizeStepperProps) {
	return (
		<View className="flex-row items-center gap-4">
			<StepperButton label="-" disabled={value <= min} onPress={() => onChange(value - 1)} />
			<Text className="font-body-bold text-lg">{value}</Text>
			<StepperButton label="+" disabled={value >= max} onPress={() => onChange(value + 1)} />
		</View>
	)
}
