import { Image } from "expo-image"
import { Pressable, Text, View } from "react-native"

interface AvatarProps {
	uri?: string | null
	name?: string
	size?: number
	onPress?: () => void
}

const initials = (name = "") =>
	name
		.split(" ")
		.filter(Boolean)
		.slice(0, 2)
		.map((p) => p[0]!.toUpperCase())
		.join("") || "?"

export function Avatar({ uri, name, size = 48, onPress }: AvatarProps) {
	const content = uri ? (
		<Image source={{ uri }} style={{ width: size, height: size, borderRadius: size / 2 }} />
	) : (
		<View
			className="items-center justify-center bg-primary-green"
			style={{ width: size, height: size, borderRadius: (size ?? 0) / 2 }}
		>
			<Text className="font-heading text-white" style={{ fontSize: size / 3 }}>
				{initials(name)}
			</Text>
		</View>
	)

	if (!onPress) return content

	return (
		<Pressable
			accessibilityRole="button"
			accessibilityLabel="Change profile picture"
			onPress={onPress}
		>
			{content}
		</Pressable>
	)
}
