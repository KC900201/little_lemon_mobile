
import { z } from "zod"

export const TIME_SLOTS = [
  "17:00", "17:30", "18:00",
  "18:30", "19:00", "19:30",
  "20:00", "20:30", "21:00"
] as const

export const reservationSchema = z.object({
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Please select a valid date"),
  time: z.enum(TIME_SLOTS, {message: "Please select a time slot"}),
  partySize: z.string().min(1, "Number of people is required").regex(/^[1-9][0-9]?$/, "Enter a valid number (1-99)"),
  name: z.string().min(2, "Name must be at least 2 characters").max(60, "Name is too long"),
  phone: z.string().regex(/^\+?[0-9\s-]{7,15}$/, "Enter a valid phone number"),
  email: z.email("Enter a valid email address").min(1, "Email is required"),
  courseReservation: z.string().optional(),
  specialRequest: z.string().max(500, "Max 500 characters").optional(),
  agreedToTerms: z.boolean().refine((v) => v === true, { message: "You must agree to the terms in order tor reserve "})
})

export type ReservationFormValues = z.infer<typeof reservationSchema>