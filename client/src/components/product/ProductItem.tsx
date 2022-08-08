import Product from "@kiosk/common/types/product";
import React from "react";
import { ContainerLI, Image } from "./ProductItem.style";

type ProductItemPropsType = {
  product: Product;
};

const ProductItem: React.FC<ProductItemPropsType> = ({ product }) => {
  const { name, image, price } = product;
  return (
    <ContainerLI>
      <Image src={image} />
      <span>{name}</span>
      <span>{price}원</span>
    </ContainerLI>
  );
};

export default ProductItem;
