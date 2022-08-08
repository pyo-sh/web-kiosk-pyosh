import Option from "./option";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  menuId: number;
  options?: Option[];
};

export default Product;
