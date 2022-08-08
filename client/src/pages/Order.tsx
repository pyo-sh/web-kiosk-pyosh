import React from "react";
import { ContainerRowDiv, ContainerColDiv } from "./Order.style";
import useMediaQuery from "@hooks/useMediaQuery";
import { ScreenQuery } from "@constants/screen";
import Product from "@components/product";
import Cart from "@components/cart";

const Order: React.FC = () => {
  const isMobile = useMediaQuery(ScreenQuery.mobile);
  const ContainerDiv = isMobile ? ContainerColDiv : ContainerRowDiv;

  return (
    <ContainerDiv>
      <Product />
      <Cart isMobile={isMobile} />
    </ContainerDiv>
  );
};

export default Order;
