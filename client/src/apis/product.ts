import axios from "axios";
import type Menu from "@kiosk/common/types/menu";
import Option from "@kiosk/common/types/option";

export async function getAllProductsWithMenu(): Promise<Menu[]> {
  const { data }: { data: { menus: Menu[] } } = await axios.get("/product");
  return data.menus;
}

export async function getProductOptions(productId: number): Promise<Option[]> {
  const { data }: { data: { personalOptions: Option[] } } = await axios.get(
    `/personal-option/${productId}`,
  );
  return data.personalOptions;
}
