import { zodResolver } from "@hookform/resolvers/zod"
import DateTimePicker from "@react-native-community/datetimepicker"
import { Picker } from "@react-native-picker/picker"
import { useCallback, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { Platform, Pressable, ScrollView, Text, TextInput, View } from "react-native"

import { useFocusEffect } from "expo-router"
import { ReservationFormValues, reservationSchema, TIME_SLOTS } from "../schema/reservation-schema"
import { ConfirmationModal } from "./confirmation-modal"

// Components

interface ReservationFormProps {
	date: string
	onConfirmed: (values: ReservationFormValues) => void
}

export function ReservationForm({ date, onConfirmed }: ReservationFormProps) {
	const [showDatePicker, setShowDatePicker] = useState(false)
	const [pendingValues, setPendingValues] = useState<ReservationFormValues | null>(null)

	const defaultValues: Partial<ReservationFormValues> = {
		date,
		time: undefined,
		partySize: "",
		name: "",
		phone: "",
		email: "",
		courseReservation: "",
		specialRequest: "",
		agreedToTerms: false,
	}

	const {
		control,
		handleSubmit,
		setValue,
		reset,
		watch,
		formState: { errors },
	} = useForm<ReservationFormValues>({
		resolver: zodResolver(reservationSchema),
		defaultValues,
	})

	useFocusEffect(
		useCallback(() => {
			return () => {
				reset(defaultValues)
				setPendingValues(null)
				setShowDatePicker(false)
			}
		}, [reset, date]),
	)

	const selectedDate = watch("date")

	const onDateChange = (_event: unknown, selected?: Date) => {
		setShowDatePicker(Platform.OS === "ios")
		if (selected) {
			setValue("date", selected.toISOString().slice(0, 10), { shouldValidate: true })
		}
	}

	const onSubmit = (values: ReservationFormValues) => {
		setPendingValues(values)
	}

	return (
		<ScrollView className="flex-1 bg-white px-4 pt-4">
			<Text className="font-heading text-primary-dark mb-2 text-xl">Reservation Details</Text>

			{/* Visitation Date */}
			<Text className="mb-1 font-body-bold text-secondary-dark">
				Visitation Date <Text className="text-red-500">*</Text>
			</Text>
			<Pressable
				onPress={() => setShowDatePicker(true)}
				className="mb-2 rounded border border-orange-300 px-3 py-2"
			>
				<Text>{selectedDate || "Select a date"}</Text>
			</Pressable>
			{showDatePicker && (
				<DateTimePicker
					value={selectedDate ? new Date(selectedDate) : new Date()}
					mode="date"
					minimumDate={new Date()}
					display={Platform.OS === "ios" ? "inline" : "default"}
					onValueChange={onDateChange}
				/>
			)}
			{errors.date && <Text className="mb-2 text-xs text-red-500">{errors.date.message}</Text>}

			{/* Visitation Time */}
			<Text className="mb-1 font-body-bold text-secondary-dark">
				Visitation Time <Text className="text-red-500">*</Text>
			</Text>
			<Controller
				control={control}
				name="time"
				render={({ field: { onChange, value } }) => (
					<View className="mb-2 rounded border border-orange-300">
						<Picker selectedValue={value} onValueChange={onChange}>
							<Picker.Item label="Select a time" value={undefined} />
							{TIME_SLOTS.map((slot) => (
								<Picker.Item key={slot} label={slot} value={slot} />
							))}
						</Picker>
					</View>
				)}
			/>
			{errors.time && <Text className="mb-2 text-xs text-red-500">{errors.time.message}</Text>}

			{/* Number of People */}
			<Text className="mb-1 font-body-bold text-secondary-dark">
				Number of people <Text className="text-red-500">*</Text>
			</Text>
			<Controller
				control={control}
				name="partySize"
				render={({ field: { onChange, value } }) => (
					<TextInput
						value={value}
						onChangeText={onChange}
						keyboardType="number-pad"
						className="mb-2 rounded border border-orange-300 px-3 py-2"
					/>
				)}
			/>
			{errors.partySize && (
				<Text className="mb-2 text-xs text-red-500">{errors.partySize.message}</Text>
			)}
			<Text className="font-heading text-primary-dark mb-2 mt-4 text-xl">Visitor Information</Text>

			{/* Name */}
			<Text className="mb-1 font-body-bold text-secondary-dark">
				Name <Text className="text-red-500">*</Text>
			</Text>
			<Controller
				control={control}
				name="name"
				render={({ field: { onChange, value } }) => (
					<TextInput
						value={value}
						onChangeText={onChange}
						className="mb-2 rounded border border-orange-300 px-3 py-2"
					/>
				)}
			/>
			{errors.name && <Text className="mb-2 text-xs text-red-500">{errors.name.message}</Text>}

			{/* Phone */}
			<Text className="mb-1 font-body-bold text-secondary-dark">
				Phone number <Text className="text-red-500">*</Text>
			</Text>
			<Controller
				control={control}
				name="phone"
				render={({ field: { onChange, value } }) => (
					<TextInput
						value={value}
						onChangeText={onChange}
						keyboardType="phone-pad"
						className="mb-2 rounded border border-orange-300 px-3 py-2"
					/>
				)}
			/>
			{errors.phone && <Text className="mb-2 text-xs text-red-500">{errors.phone.message}</Text>}

			{/* Email */}
			<Text className="mb-1 font-body-bold text-secondary-dark">
				Email address <Text className="text-red-500">*</Text>
			</Text>
			<Controller
				control={control}
				name="email"
				render={({ field: { onChange, value } }) => (
					<TextInput
						value={value}
						onChangeText={onChange}
						keyboardType="email-address"
						className="mb-2 rounded border border-orange-300 px-3 py-2"
					/>
				)}
			/>
			{errors.email && <Text className="mb-2 text-xs text-red-500">{errors.email.message}</Text>}

			{/* Other information */}
			<Text className="font-heading text-primary-dark mb-2 mt-4 text-xl">Other details</Text>
			<Controller
				control={control}
				name="courseReservation"
				render={({ field: { onChange, value } }) => (
					<TextInput
						value={value}
						onChangeText={onChange}
						placeholder="Course reservation"
						className="mb-2 rounded border border-orange-300 px-3 py-2"
					/>
				)}
			/>
			<Controller
				control={control}
				name="specialRequest"
				render={({ field: { onChange, value } }) => (
					<TextInput
						value={value}
						onChangeText={onChange}
						placeholder="Special request"
						multiline
						numberOfLines={4}
						className="mb-2 rounded border border-orange-300 px-3 py-2"
					/>
				)}
			/>

			<Controller
				control={control}
				name="agreedToTerms"
				render={({ field: { onChange, value } }) => (
					<Pressable onPress={() => onChange(!value)} className="mb-1 flex-row items-center gap-2">
						<View
							className={`h-5 w-5 rounded border ${value ? "bg-primary-green" : "bg-white"} border-secondary-dark`}
						/>
						<Text className="flex-1 text-xs text-secondary-dark">
							I agree with the Terms and Condition, and Privacy Policy
						</Text>
					</Pressable>
				)}
			/>
			{errors.agreedToTerms && (
				<Text className="mb-2 text-xs text-red-500">{errors.agreedToTerms.message}</Text>
			)}

			<View className="my-4 flex-row items-center justify-center gap-3">
				<Pressable
					onPress={handleSubmit(onSubmit)}
					className="flex-1 rounded-full bg-primary-yellow px-4 py-3"
				>
					<Text className="text-center font-body-bold text-secondary-dark">Reserve a table</Text>
				</Pressable>
				<Pressable className="flex-1 rounded-full bg-secondary-dark px-4 py-3">
					<Text className="text-center font-body-bold text-white">Cancel</Text>
				</Pressable>
			</View>

			<ConfirmationModal
				visible={pendingValues !== null}
				values={pendingValues}
				onCancel={() => setPendingValues(null)}
				onConfirm={() => {
					if (pendingValues) onConfirmed(pendingValues)
					setPendingValues(null)
					reset(defaultValues)
				}}
			/>
		</ScrollView>
	)
}
