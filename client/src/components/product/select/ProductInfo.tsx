import React from "react";
import Product from "@kiosk/common/types/product";
import { ContainerDiv, Image, PriceSpan, TitleH3 } from "./ProductInfo.style";
import { useOptionState } from "@hooks/store/option";

type ProductInfoPropsType = {
  product: Product;
};

const ProductInfo: React.FC<ProductInfoPropsType> = ({ product }) => {
  const { name, price, image } = product;
  const { optionPrice, count } = useOptionState();
  const nowPrice = (price + optionPrice) * count;

  return (
    <ContainerDiv>
      <Image src={image} />
      <TitleH3>{name}</TitleH3>
      <PriceSpan>
        {price}원 / 총 {nowPrice}원
      </PriceSpan>
    </ContainerDiv>
  );
};

export default ProductInfo;
