import React, { useContext, useRef, useState } from "react";
import {
  ButtonWrapperDiv,
  CartInfoDiv,
  ContainerDiv,
  ToggleButton,
  TotalDiv,
  WrapperDiv,
} from "./index.style";
import { useCartState } from "@hooks/store/cart";
import { MediaContext } from "@hooks/useMediaQuery";
import CartButtons from "./CartButtons";
import CartList from "./CartList";

const Cart: React.FC = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const cartWrapper = useRef<HTMLDivElement>(null);
  const isMobile = useContext(MediaContext);
  const { totalPrice } = useCartState();

  const onToggleShow = (e: any) => {
    if (!cartWrapper.current) return;
    setIsShow(!isShow);
  };

  return (
    <WrapperDiv isMobile={isMobile} ref={cartWrapper}>
      <ContainerDiv isMobile={isMobile} isShow={isShow}>
        <ButtonWrapperDiv isMobile={isMobile}>
          <ToggleButton isMobile={isMobile} onClick={onToggleShow} />
        </ButtonWrapperDiv>
        <CartList />
        <CartInfoDiv>
          <div id="cart-timer"></div>
          <TotalDiv>총 {totalPrice}원</TotalDiv>
        </CartInfoDiv>
        <CartButtons />
      </ContainerDiv>
    </WrapperDiv>
  );
};

export default Cart;
