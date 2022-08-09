import React, { useContext } from "react";
import { ContainerRowDiv, ContainerColDiv } from "./Order.style";
import Product from "@components/product";
import Cart from "@components/cart";
import { MediaContext } from "@hooks/useMediaQuery";

const Order: React.FC = () => {
  const isMobile = useContext(MediaContext);
  const ContainerDiv = isMobile ? ContainerColDiv : ContainerRowDiv;

  return (
    <ContainerDiv>
      <Product />
      <Cart />
    </ContainerDiv>
  );
};

export default Order;
