import React from "react";
import { ContainerUL, WrapperDiv } from "./ProductList.style";
import Menu from "@kiosk/common/types/menu";
import ProductItem from "./ProductItem";

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
