import type { ReactNode } from "react"
import { type ViewProps, Image, View } from "react-native"

interface CardProps extends ViewProps {
	imageUri?: string
	children: ReactNode
}

export function Card({ children, imageUri, className, ...props }: CardProps) {
	return (
		<View className={`card-surface flex-row items-center gap-3 p-3 ${className ?? ""}`} {...props}>
			{imageUri ? (
				<Image source={{ uri: imageUri }} className="h-16 w-16 rounded-card" resizeMode="cover" />
			) : null}
			<View className="flex-1">{children}</View>
		</View>
	)
}
