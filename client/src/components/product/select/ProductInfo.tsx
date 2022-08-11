import Product from "@kiosk/common/types/product";
import React from "react";
import { ContainerDiv, Image, PriceSpan, TitleH3 } from "./ProductInfo.style";

type ProductInfoPropsType = {
  product: Product;
};

const ProductInfo: React.FC<ProductInfoPropsType> = ({ product }) => {
  const { name, price, image } = product;

  return (
    <ContainerDiv>
      <Image src={image} />
      <TitleH3>{name}</TitleH3>
      <PriceSpan>{price}원</PriceSpan>
    </ContainerDiv>
  );
};

export default ProductInfo;
