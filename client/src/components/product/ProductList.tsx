import Menu from "@kiosk/common/types/menu";
import React from "react";
import ProductItem from "./ProductItem";
import { ContainerUL, WrapperDiv } from "./ProductList.style";

type ProductListPropsType = {
  menu: Menu;
};

const ProductList: React.FC<ProductListPropsType> = ({ menu }) => {
  const products = menu.products;

  return (
    <WrapperDiv>
      <ContainerUL>
        {products?.map((product, i) => (
          <ProductItem key={i} product={product} />
        ))}
      </ContainerUL>
    </WrapperDiv>
  );
};

export default ProductList;
