import React from "react"
import { View } from "react-native"

interface FooterActionBarProps {
	children: React.ReactNode
}

export function FooterActionBar({ children }: FooterActionBarProps) {
	return (
		<View className="flex-row gap-3 border-t border-secondary-gray bg-white p-4">{children}</View>
	)
}
