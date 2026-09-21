import { Pressable, Text } from "react-native"

type ButtonVariant = "primary" | "secondary" | "tertiary"

interface ButtonProps {
	label: string
	onPress?: () => void
	variant?: ButtonVariant
	disabled?: boolean
}

const VARIANT_CLASS: Record<ButtonVariant, string> = {
	primary: "btn-primary",
	secondary: "btn-secondary",
	tertiary: "btn-tertiary",
}

const VARIANT_TEXT_CLASS: Record<ButtonVariant, string> = {
	primary: "text-secondary-dark",
	secondary: "text-white",
	tertiary: "text-secondary-dark",
}

export function Button({ label, onPress, variant = "primary", disabled }: ButtonProps) {
	return (
		<Pressable
			accessibilityRole="button"
			className={`${VARIANT_CLASS[variant]} ${disabled ? "opacity-50" : ""}`}
			onPress={onPress}
			disabled={disabled}
		>
			<Text className={`font-body-bold ${VARIANT_TEXT_CLASS[variant]}`}>{label}</Text>
		</Pressable>
	)
}
