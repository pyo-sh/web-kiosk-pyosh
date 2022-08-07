import Product from "./option";

type Menu = {
  id: number;
  name: string;
  products?: Product[];
};

export default Menu;
