import { useQuery } from "@tanstack/react-query"
import { mockMenuApi } from "../api/mock-menu"
import type { CATEGORY } from "../types"


export function useMenu(query: string, category: CATEGORY) {
  return useQuery({
    queryKey: ["menus"],
    queryFn: () => mockMenuApi.getMenus({ query, category })
  })
}