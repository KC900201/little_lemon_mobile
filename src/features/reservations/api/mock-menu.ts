import type { Menu } from "../types"
import { MenuApi } from "./menu-api"

const MAIN_MENU: Menu[] = [
  { name: "Greek Salad", category: "Starters", price: "10.00", description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago...", isSpecial: false },
  { name: "Bruschetta", category: "Starters", price: "8.40", description: "Our Bruschetta is made from grilled bread that has been smeared with garli...", isSpecial: true },
  { name: "Penne Pasta", category: "Mains", price: "20.00", description: "Penne pasta tossed in a rich tomato sauce." },
]

export const mockMenuApi: MenuApi = {
  async getMenus({query, category}) {
    if (!query && !category) {
      return MAIN_MENU
    }

    return MAIN_MENU.filter((menu) => menu.name.includes(query.trim()) || menu.category === category)
  }
}