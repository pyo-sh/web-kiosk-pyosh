import Product from "./product";

type Menu = {
  id: number;
  name: string;
  products?: Product[];
};

export default Menu;
