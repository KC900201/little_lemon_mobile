import { TextInput, View } from "react-native"

import { SectionTitle } from "@/shared/ui/section-title"

interface HeroSearchProps {
	query: string
	onChangeQuery: (value: string) => void
}

export function HeroSearch({ query, onChangeQuery }: HeroSearchProps) {
	return (
		<View className="gap-3 bg-primary-green p-6">
			<SectionTitle className="text-primary-yellow">Little Lemon</SectionTitle>
			<TextInput
				accessibilityLabel="Search menu"
				className="chip-pull bg-white font-body"
				placeholder="Search dishes..."
				value={query}
				onChangeText={onChangeQuery}
			/>
		</View>
	)
}
