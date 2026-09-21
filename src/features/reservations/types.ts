export type TimeSlot = { id: string; time: string; available: boolean }

export type ReservationInput = {
  date: string; // ISO date
  slotId: string;
  partySize: number
  name: string
  phone: string
}

export type Reservation = ReservationInput & { id: string; status: "confirmed" }

export type CATEGORY = "Starters" | "Mains" | "Desserts" |"Drinks"

export type Menu = {
  name: string
  category: CATEGORY
  price: string
  description: string
  imageUri?: string
  isSpecial?: boolean
}