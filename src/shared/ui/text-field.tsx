import { Eye, EyeOff } from "lucide-react-native"
import { useState } from "react"
import { type TextInputProps, Pressable, Text, TextInput, View } from "react-native"

import { colors } from "../theme/colors"

interface TextFieldProps extends TextInputProps {
	label: string
	error?: string
}

export function TextField({ label, error, secureTextEntry, ...rest }: TextFieldProps) {
	const [focused, setFocused] = useState(false)
	const [hidden, setHidden] = useState(!!secureTextEntry)

	return (
		<View className="mb-4">
			<Text className="mb-1 font-body-bold text-secondary-dark">{label}</Text>
			<View
				className={`flex-row items-center rounded-card border px-3 ${
					error ? "border-red-500" : focused ? "border-primary-green" : "border-secondary-gray"
				} bg-white`}
			>
				<TextInput
					{...rest}
					accessibilityLabel={rest.accessibilityLabel ?? label}
					secureTextEntry={hidden}
					onFocus={(e) => {
						setFocused(true)
						rest.onFocus?.(e)
					}}
					onBlur={(e) => {
						setFocused(false)
						rest.onBlur?.(e)
					}}
					placeholderTextColor={colors.placeholder}
					className="flex-1 py-3 font-body text-base text-secondary-dark"
				/>

				{secureTextEntry && (
					<Pressable
						accessibilityRole="button"
						accessibilityLabel={hidden ? "Show password" : "Hide password"}
						onPress={() => setHidden((v) => !v)}
						hitSlop={8}
					>
						{hidden ? (
							<EyeOff size={20} color={colors.primaryGreen} />
						) : (
							<Eye size={20} color={colors.primaryGreen} />
						)}
					</Pressable>
				)}
			</View>
			{error && <Text className="mt-1 text-xs text-red-500">{error}</Text>}
		</View>
	)
}
