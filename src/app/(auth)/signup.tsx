import { zodResolver } from "@hookform/resolvers/zod"
import { Link } from "expo-router"
import { Controller, useForm } from "react-hook-form"
import { Alert, Text, View } from "react-native"

import { signupSchema, SignupValues } from "@/features/auth/schema/auth-schema"

import { AuthShell } from "@/features/auth/components/auth-shell"
import { Button } from "@/shared/ui/button"
import { TextField } from "@/shared/ui/text-field"

export default function SignupScreen() {
	const {
		control,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<SignupValues>({
		resolver: zodResolver(signupSchema),
		defaultValues: { name: "", email: "", password: "", confirmPassword: "" },
	})

	// TODO: replace with the real auth call
	const onSubmit = async (_values: SignupValues) => {
		Alert.alert("Account created")
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
						label="Passwprd"
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
