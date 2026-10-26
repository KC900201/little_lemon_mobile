import { zodResolver } from "@hookform/resolvers/zod"
import { Link, useRouter } from "expo-router"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { Alert, Text, View } from "react-native"

import { useAuth } from "@/context/auth-context"
import { signupSchema, SignupValues } from "@/features/auth/schema/auth-schema"

import { AuthShell } from "@/features/auth/components/auth-shell"
import { Button } from "@/shared/ui/button"
import { TextField } from "@/shared/ui/text-field"

export default function SignupScreen() {
	const router = useRouter()
	const { signUp } = useAuth()
	const [serverError, setServerError] = useState<string | null>(null)

	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<SignupValues>({
		resolver: zodResolver(signupSchema),
		defaultValues: { name: "", email: "", password: "", confirmPassword: "" },
	})

	const onSubmit = async (values: SignupValues) => {
		setServerError(null)
		try {
			const { needsEmailConfirmation } = await signUp({
				name: values.name,
				email: values.email,
				password: values.password,
			})
			if (needsEmailConfirmation) {
				Alert.alert("Check your inbox", "We sent a confirmation link to your email.", [
					{ text: "OK", onPress: () => router.replace("/login") },
				])
			}
			// Otherwise a session exists and the root guard routes to Home
		} catch (e) {
			setServerError(e instanceof Error ? e.message : "Something went wrong. Please try again.")
		}
	}

	return (
		<AuthShell title="Create account" subtitle="Join Little Lemon to reserve a table">
			{/* Name */}
			<Controller
				control={control}
				name="name"
				render={({ field: { onChange, onBlur, value } }) => (
					<TextField
						label="Full name"
						placeholder="Enter your name"
						autoComplete="name"
						value={value}
						onChangeText={onChange}
						onBlur={onBlur}
						error={errors.name?.message}
					/>
				)}
			/>
			{/* Email */}
			<Controller
				control={control}
				name="email"
				render={({ field: { onChange, onBlur, value } }) => (
					<TextField
						label="Email address"
						placeholder="Enter email"
						autoComplete="email"
						keyboardType="email-address"
						autoCapitalize="none"
						value={value}
						onChangeText={onChange}
						onBlur={onBlur}
						error={errors.email?.message}
					/>
				)}
			/>

			{/* Password */}
			<Controller
				control={control}
				name="password"
				render={({ field: { onChange, onBlur, value } }) => (
					<TextField
						label="Password"
						placeholder="At least 8 characters"
						autoComplete="new-password"
						value={value}
						secureTextEntry
						onChangeText={onChange}
						onBlur={onBlur}
						error={errors.password?.message}
					/>
				)}
			/>

			{/* Confirm password */}
			<Controller
				control={control}
				name="confirmPassword"
				render={({ field: { onChange, onBlur, value } }) => (
					<TextField
						label="Confirm password"
						placeholder="Re-enter password"
						autoComplete="new-password"
						secureTextEntry
						value={value}
						onChangeText={onChange}
						onBlur={onBlur}
						error={errors.confirmPassword?.message}
					/>
				)}
			/>

			{serverError && <Text className="mb-2 text-center text-sm text-red-500">{serverError}</Text>}

			<View className="mt-2">
				<Button label="Sign up" onPress={handleSubmit(onSubmit)} disabled={isSubmitting} />
			</View>

			<Text className="mt-6 text-center font-body text-secondary-dark">
				Already have an account?{" "}
				<Link href={"/login"} replace className="font-body-bold text-primary-green">
					Sign In
				</Link>
			</Text>
		</AuthShell>
	)
}
