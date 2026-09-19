import type { Menu } from "../types"
import { MenuApi } from "./menu-api"

const MAIN_MENU: Menu[] = [
  {
    name: "Greek Salad",
    category: "Starters",
    price: "10.00",
    imageUri: "../assets/menus/greek salad.jpg",
    isSpecial: false
  },
  {
    name: "Bruschetta",
    category: "Starters",
    price: "8.40",
    imageUri: "../assets/menus/bruschetta.jpg",
    isSpecial: true
  },
  {
    name: "Penne Pasta",
    category: "Mains",
    price: "20.00",
    imageUri: "../assets/menus/penne_pasta.jpg"
  }
]

export const mockMenuApi: MenuApi = {
  async getMenus({query, category}) {
    if (!query && !category) {
      return MAIN_MENU
    }

    return MAIN_MENU.filter((menu) => menu.name.includes(query.trim()) || menu.category === category)
  }
}