import type { ReactNode } from "react"
import { type ViewProps, View } from "react-native"

interface CardProps extends ViewProps {
	children: ReactNode
}

export function Card({ children, className, ...props }: CardProps) {
	return (
		<View className={`card-surface ${className ?? ""}`} {...props}>
			{children}
		</View>
	)
}
