import { useCartState } from "@hooks/store/cart";
import { MediaContext } from "@hooks/useMediaQuery";
import React, { useContext, useRef, useState } from "react";
import CartButtons from "./CartButtons";
import CartList from "./CartList";
import { ContainerDiv, MobileWrapper, TabletWrapper, ToggleButton } from "./index.style";

const Cart: React.FC = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const cartWrapper = useRef<HTMLDivElement>(null);
  const isMobile = useContext(MediaContext);
  const WrapperDiv = isMobile ? MobileWrapper : TabletWrapper;
  const { totalPrice } = useCartState();

  const onToggleShow = (e: any) => {
    if (!cartWrapper.current) return;
    setIsShow(!isShow);
  };

  return (
    <WrapperDiv isShow={isShow} ref={cartWrapper}>
      <ContainerDiv>
        <ToggleButton onClick={onToggleShow}>On/Off</ToggleButton>
        <CartList />
        <div>총 {totalPrice}원</div>
        <CartButtons />
      </ContainerDiv>
    </WrapperDiv>
  );
};

export default Cart;
