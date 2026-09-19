import { Text, View } from "react-native"

import { BadgeCheck } from "@/shared/ui/badge-check"
import { Card } from "@/shared/ui/card"

interface MenuItemCardProps {
	name: string
	price: string
	isSpecial?: boolean
}

export function MenuItemCard({ name, price, isSpecial }: MenuItemCardProps) {
	return (
		<Card className="flex-row items-center justify-between p-4">
			<View className="flex-row items-center gap-2">
				<Text className="font-body-bold text-secondary-dark">{name}</Text>
				{isSpecial ? <BadgeCheck size={16} /> : null}
			</View>
			<Text className="font-bold text-primary-green">{price}</Text>
		</Card>
	)
}
