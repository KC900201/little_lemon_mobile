import type { ReactNode } from "react"
import { type TextProps, Text } from "react-native"

interface SectionTitleProps extends TextProps {
	children: ReactNode
}

export function SectionTitle({ children, className, ...props }: SectionTitleProps) {
	return (
		<Text className={`font-display text-3xl text-primary-green ${className ?? ""}`} {...props}>
			{children}
		</Text>
	)
}
