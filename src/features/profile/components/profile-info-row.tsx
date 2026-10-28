import { Text, View } from "react-native"

interface RowProps {
	label: string
	value?: string
}

export function ProfileInfoRow({ label, value }: RowProps) {
	return (
		<View className="border-b border-secondary-gray py-3">
			<Text className="font-body text-sm text-primary-green">{label}</Text>
			<Text className="font-body-medium text-base text-secondary-dark">{value ?? "-"}</Text>
		</View>
	)
}
