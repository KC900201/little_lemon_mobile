import { zodResolver } from "@hookform/resolvers/zod"
import { Link } from "expo-router"
import { Controller, useForm } from "react-hook-form"
import { Text, View } from "react-native"

import { loginSchema, LoginValues } from "@/features/auth/schema/auth-schema"

import { useAuth } from "@/context/auth-context"

import { AuthShell } from "@/features/auth/components/auth-shell"
import { toAuthMessage } from "@/features/auth/lib/auth-error"
import { Button } from "@/shared/ui/button"
import { TextField } from "@/shared/ui/text-field"

export default function LoginScreen() {
	const {
		control,
		handleSubmit,
		setError,
		formState: { errors, isSubmitting },
	} = useForm<LoginValues>({
		resolver: zodResolver(loginSchema),
		defaultValues: { email: "", password: "" },
	})

	const { signIn } = useAuth()

	const onSubmit = async (values: LoginValues) => {
		try {
			await signIn(values)
		} catch (e) {
			setError("password", { message: toAuthMessage(e) })
		}
	}

	return (
		<AuthShell title="Welcome back" subtitle="Log in to continue">
			<Controller
				control={control}
				name="email"
				render={({ field: { onChange, onBlur, value } }) => (
					<TextField
						label="Email address"
						placeholder="Enter email address"
						keyboardType="email-address"
						autoComplete="email"
						autoCapitalize="none"
						value={value}
						onChangeText={onChange}
						onBlur={onBlur}
						error={errors.email?.message}
					/>
				)}
			/>

			<Controller
				control={control}
				name="password"
				render={({ field: { onChange, onBlur, value } }) => (
					<TextField
						label="Password"
						placeholder="Enter password"
						autoComplete="password"
						autoCapitalize="none"
						secureTextEntry
						value={value}
						onChangeText={onChange}
						onBlur={onBlur}
						error={errors.password?.message}
					/>
				)}
			/>

			<View className="mt-2">
				<Button label="Sign In" onPress={handleSubmit(onSubmit)} disabled={isSubmitting} />
			</View>

			<Text className="mt-6 text-center font-body text-secondary-dark">
				Don&apos;t have an account?{" "}
				<Link href={"/signup"} replace className="font-body-bold text-primary-green">
					Sign up
				</Link>
			</Text>
		</AuthShell>
	)
}
