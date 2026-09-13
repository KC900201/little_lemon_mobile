import type { Reservation, ReservationInput, TimeSlot } from "../types"

export interface ReservationApi {
  getAvailableSlots(date: string): Promise<TimeSlot[]>
  createReservation(input: ReservationInput): Promise<Reservation>
}