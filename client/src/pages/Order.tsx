import React, { useContext } from "react";
import { ContainerRowDiv, ContainerColDiv } from "./Order.style";
import Product from "@components/product";
import Cart from "@components/cart";
import { MediaContext } from "@hooks/useMediaQuery";
import { CartProvider } from "@hooks/store/cart";

const Order: React.FC = () => {
  const isMobile = useContext(MediaContext);
  const ContainerDiv = isMobile ? ContainerColDiv : ContainerRowDiv;

  return (
    <CartProvider>
      <ContainerDiv>
        <Product />
        <Cart />
      </ContainerDiv>
    </CartProvider>
  );
};

export default Order;
