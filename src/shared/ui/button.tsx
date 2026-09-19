import { Pressable, Text } from "react-native"

interface ButtonProps {
	label: string
	onPress?: () => void
	disabled?: boolean
}

export function Button({ label, onPress, disabled }: ButtonProps) {
	return (
		<Pressable
			accessibilityRole="button"
			className="btn-primary"
			onPress={onPress}
			disabled={disabled}
		>
			<Text className="font-body-bold text-secondary-dark">{label}</Text>
		</Pressable>
	)
}
