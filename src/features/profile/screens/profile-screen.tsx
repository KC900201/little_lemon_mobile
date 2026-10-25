import { ScrollView, Text, View } from "react-native"

import { useAuth } from "@/context/auth-context"
import { Avatar } from "@/shared/ui/avatar"
import { Button } from "@/shared/ui/button"

import { useAvatarUpload } from "../hooks/useAvatarUpload"
import { useSignOut } from "../hooks/useSignOut"

import { ProfileInfoRow } from "../components/profile-info-row"

export function ProfileScreen() {
	const { user } = useAuth()
	const { pickAndUpload, isUploading } = useAvatarUpload()
	const confirmSignOut = useSignOut()

	if (!user) return null

	console.log(user)

	return (
		<ScrollView className="flex-1 bg-white" contentContainerClassName="p-6 gap-6">
			<Text className="font-heading text-center text-4xl text-primary-green">User Profile</Text>

			<View className="items-center gap-3">
				<Avatar uri={user.profileImage} name={user.name} onPress={pickAndUpload} size={200} />
				<Button
					variant="tertiary"
					label={isUploading ? "Uploading…" : user.profileImage ? "Change photo" : "Add photo"}
					onPress={pickAndUpload}
					disabled={isUploading}
				/>
			</View>

			<View>
				<ProfileInfoRow label="Name" value={user.name} />
				<ProfileInfoRow label="Email" value={user.email} />
				{user.username ? <ProfileInfoRow label="Username" value={user.username} /> : null}
			</View>

			<View className="mt-8">
				<Button variant="destructive" label="Sign out" onPress={confirmSignOut} />
			</View>
		</ScrollView>
	)
}
