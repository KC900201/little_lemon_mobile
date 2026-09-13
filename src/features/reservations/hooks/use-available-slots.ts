import { useQuery } from "@tanstack/react-query"
import { mockReservationApi } from "../api/mock-reservation"

export function useAvailableSlots(date: string) {
  return useQuery({
    queryKey: ["reservations", "slots", date],
    queryFn: () => mockReservationApi.getAvailableSlots(date),
    enabled: Boolean(date)
  })
}