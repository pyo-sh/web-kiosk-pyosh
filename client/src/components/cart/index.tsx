import { useCartState } from "@hooks/store/cart";
import { MediaContext } from "@hooks/useMediaQuery";
import React, { useContext, useRef, useState } from "react";
import CartButtons from "./CartButtons";
import CartList from "./CartList";
import { ButtonWrapperDiv, ContainerDiv, ToggleButton, TotalDiv, WrapperDiv } from "./index.style";

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
        <TotalDiv>총 {totalPrice}원</TotalDiv>
        <CartButtons />
      </ContainerDiv>
    </WrapperDiv>
  );
};

export default Cart;
