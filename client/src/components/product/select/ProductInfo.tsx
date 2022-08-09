import Product from "@kiosk/common/types/product";
import React from "react";
import { ContainerDiv } from "./ProductInfo.style";

type ProductInfoPropsType = {
  product: Product;
};

const ProductInfo: React.FC<ProductInfoPropsType> = ({ product }) => {
  const { name, price, image } = product;

  return (
    <ContainerDiv>
      <img src={image} />
      <div>{name}</div>
      <div>{price}</div>
    </ContainerDiv>
  );
};

export default ProductInfo;
