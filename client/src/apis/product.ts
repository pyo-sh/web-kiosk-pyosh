import axios from "axios";
import type Menu from "@kiosk/common/types/menu";

export async function getAllProductsWithMenu(): Promise<Menu[]> {
  const { data }: { data: { menus: Menu[] } } = await axios.get("/product");
  return data.menus;
}
