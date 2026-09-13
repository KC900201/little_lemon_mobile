import { Reservation, ReservationInput, TimeSlot } from "../types"
import { ReservationApi } from "./reservation-api"


const SLOTS: TimeSlot[] = [
  { id: "slot-1", time: "18:00", available: true },
  { id: "slot-2", time: "19:00", available: true },
  { id: "slot-3", time: "21:00", available: false },
]

export const mockReservationApi: ReservationApi = {
  async getAvailableSlots(_date) {
    return SLOTS
  },
  async createReservation(input: ReservationInput): Promise<Reservation> {
   return { ...input, id: `res-${Date.now()}`, status: "confirmed" } 
  },
}