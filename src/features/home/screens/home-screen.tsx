import { useRouter } from "expo-router"
import { useState } from "react"
import { FlatList, View } from "react-native"

import { useMenu } from "@/features/reservations/hooks/use-menu"
import { CATEGORY } from "@/features/reservations/types"

import { Button } from "@/shared/ui/button"
import { HeroSearch } from "../components/hero-search"
import { MenuItemCard } from "../components/menu-item-card"

const CATEGORIES: CATEGORY[] = ["Starters", "Mains", "Desserts", "Drinks"]

export function HomeScreen() {
	const router = useRouter()
	const [query, setQuery] = useState("")
	const [category, setCategory] = useState<CATEGORY>(CATEGORIES[0])
	const { data: items } = useMenu(query, category)

	return (
		<View className="flex-1 bg-white">
			<HeroSearch query={query} onChangeQuery={setQuery} />

			<FlatList
				data={items}
				keyExtractor={(item, index) => `${item.name}-${index}`}
				contentContainerStyle={{ gap: 3, padding: 4 }}
				renderItem={({ item }) => (
					<MenuItemCard name={item.name} price={item.price} isSpecial={item.isSpecial} />
				)}
			/>
			<View className="p-4">
				<Button label="Reserve a table" onPress={() => router.push("./reservations")} />
			</View>
		</View>
	)
}
