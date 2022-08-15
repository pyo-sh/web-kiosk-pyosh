import Product from "./product";

type MenuType = {
  id: number;
  name: string;
  products?: Product[];
};

export default MenuType;
