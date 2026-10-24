import { ScrollView } from "react-native"

import { CATEGORY } from "@/features/reservations/types"
import { PillChip } from "@/shared/ui/pill-chip"

interface CategoryFilterBarProps {
	categories: CATEGORY[]
	selected: string
	onSelect: (category: CATEGORY) => void
}

export function CategoryFilterBar({ categories, selected, onSelect }: CategoryFilterBarProps) {
	return (
		<ScrollView
			horizontal
			showsHorizontalScrollIndicator={false}
			contentContainerClassName="gap-4"
			className="px-4"
		>
			{categories.map((category) => (
				<PillChip
					key={category}
					label={category}
					selected={category === selected}
					onPress={() => onSelect(category)}
				/>
			))}
		</ScrollView>
	)
}
