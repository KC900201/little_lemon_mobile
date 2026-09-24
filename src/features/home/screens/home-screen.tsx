import { useRouter } from "expo-router"
import { useState } from "react"
import { FlatList, Text, View } from "react-native"

import { useMenu } from "@/features/reservations/hooks/use-menu"
import { CATEGORY } from "@/features/reservations/types"

import { CategoryFilterBar } from "../components/category-filter-bar"
import { HeroIntro } from "../components/hero-intro"
import { MenuItemCard } from "../components/menu-item-card"

const CATEGORIES: CATEGORY[] = ["Starters", "Mains", "Desserts", "Drinks"]

export function HomeScreen() {
	const router = useRouter()
	const [query, setQuery] = useState("")
	const [category, setCategory] = useState<CATEGORY>(CATEGORIES[0])
	const { data: items } = useMenu(query, category)

	return (
		<View className="mt-10 flex-1 bg-white">
			<FlatList
				ListHeaderComponent={
					<>
						<HeroIntro />
						<Text className="px-4 pt-4 font-body-bold text-lg text-secondary-dark">
							ORDER FOR DELIVERY!
						</Text>
						<CategoryFilterBar categories={CATEGORIES} selected={category} onSelect={setCategory} />
					</>
				}
				data={items}
				keyExtractor={(item, index) => `${item.name}-${index}`}
				contentContainerStyle={{ gap: 4, paddingBottom: 16 }}
				renderItem={({ item }) => (
					<MenuItemCard
						name={item.name}
						description={item.description}
						price={item.price}
						imageKey={item.name}
						isSpecial={item.isSpecial}
					/>
				)}
			/>
		</View>
	)
}
