import { CATEGORY, Menu } from "../types"

interface getMenuRequest {
  query: string
  category: CATEGORY
}

export interface MenuApi {
  getMenus({ query, category}: getMenuRequest): Promise<Menu[]>
}