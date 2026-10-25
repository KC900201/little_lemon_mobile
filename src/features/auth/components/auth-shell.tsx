import { ReactNode } from "react"
import { Image, KeyboardAvoidingView, Platform, ScrollView, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import HeroImage from "@/assets/images/restaurantfood.jpg"

interface AuthShellProps {
	title: string
	subtitle: string
	children: ReactNode
}

export function AuthShell({ title, subtitle, children }: AuthShellProps) {
	return (
		<View className="flex-1 bg-primary-green">
			<KeyboardAvoidingView
				className="flex-1"
				behavior={Platform.OS === "ios" ? "padding" : undefined}
			>
				<ScrollView
					contentContainerStyle={{ flexGrow: 1 }}
					keyboardShouldPersistTaps="handled"
					showsVerticalScrollIndicator={false}
				>
					<SafeAreaView edges={["top"]} className="items-center justify-center px-6 pb-8 pt-4">
						<Image
							source={HeroImage}
							resizeMode="cover"
							className="mb-2 h-32 w-32 rounded-full border-2 border-primary-yellow"
						/>
						<Text className="text-center font-display text-5xl text-primary-yellow">
							Little Lemon
						</Text>
						<Text className="text-center font-display text-2xl text-white">Chicago</Text>
					</SafeAreaView>

					<SafeAreaView edges={["bottom"]} className="flex-1 rounded-t-3xl bg-white px-6 pt-8">
						<Text className="font-display text-4xl text-secondary-dark">{title}</Text>
						<Text className="mb-6 font-body text-base text-secondary-dark/70">{subtitle}</Text>
						{children}
					</SafeAreaView>
				</ScrollView>
			</KeyboardAvoidingView>
		</View>
	)
}
