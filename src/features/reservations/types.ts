export type TimeSlot = { id: string; time: string; available: boolean }

export type ReservationInput = {
  date: string; // ISO date
  slotId: string;
  partySize: number
  name: string
  phone: string
}

export type Reservation = ReservationInput & { id: string; status: "confirmed" }