import React, { useContext } from "react";
import { ContainerRowDiv, ContainerColDiv } from "./Order.style";
import Product from "@components/product";
import Cart from "@components/cart";
import { MediaContext } from "@hooks/useMediaQuery";
import { CartProvider } from "@hooks/store/cart";
import { BillProvider } from "@hooks/store/bill";
import Receipt from "@components/receipt";

const OrderPage: React.FC = () => {
  const isMobile = useContext(MediaContext);
  const ContainerDiv = isMobile ? ContainerColDiv : ContainerRowDiv;

  return (
    <BillProvider Receipt={Receipt}>
      <CartProvider>
        <ContainerDiv>
          <Product />
          <Cart />
        </ContainerDiv>
      </CartProvider>
    </BillProvider>
  );
};

export default OrderPage;
