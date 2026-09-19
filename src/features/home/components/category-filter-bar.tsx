import { PillChip } from "@/shared/ui/pill-chip"
import { ScrollView } from "react-native"

interface CategoryFilterBarProps {
	categories: string[]
	selected: string
	onSelect: (category: string) => void
}

export function CategoryFilterBar({ categories, selected, onSelect }: CategoryFilterBarProps) {
	return (
		<ScrollView horizontal showsHorizontalScrollIndicator={false} className="gap-2 px-4">
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
