import React from "react"
import { View } from "react-native"

interface BadgeCheckProps {
	size?: number
}

export function BadgeCheck({ size = 24, children }: React.PropsWithChildren<BadgeCheckProps>) {
	return (
		<View className="badge-check" style={{ width: size, height: size }}>
			{children}
		</View>
	)
}
