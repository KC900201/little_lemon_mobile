import { Image, Text, View } from "react-native"

import { MENU_IMAGES } from "@/features/reservations/api/menu-images"
import { BadgeCheck } from "@/shared/ui/badge-check"

interface MenuItemCardProps {
	name: string
	description?: string
	price: string
	imageKey: string
	isSpecial?: boolean
}

export function MenuItemCard({ name, description, price, imageKey, isSpecial }: MenuItemCardProps) {
	const image = MENU_IMAGES[imageKey]

	return (
		<View className="flex-row gap-3 border-b border-secondary-gray px-4 py-3">
			{image ? <Image source={image} className="h-16 w-16 rounded-2xl" resizeMode="cover" /> : null}
			<View className="flex-1 gap-1">
				<View className="flex-row items-center gap-2">
					<Text className="font-body-bold text-secondary-dark">{name}</Text>
					{isSpecial ? <BadgeCheck size={14} /> : null}
				</View>
				{description ? (
					<Text className="font-body text-sm text-secondary-dark/70" numberOfLines={2}>
						{description}
					</Text>
				) : null}
				<Text className="font-body-bold text-primary-green">${price}</Text>
			</View>
		</View>
	)
}
