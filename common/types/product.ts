import Option from "./option";

type ProductType = {
  id: number;
  name: string;
  price: number;
  image: string;
  menuId: number;
  options?: Option[];
};

export default ProductType;
