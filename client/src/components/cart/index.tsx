import React, { useRef, useState } from "react";
import { ContainerDiv, MobileWrapper, TabletWrapper, ToggleButton } from "./index.style";

type CartPropsType = {
  isMobile: boolean;
};

const Cart: React.FC<CartPropsType> = ({ isMobile }) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const cartWrapper = useRef<HTMLDivElement>(null);
  const WrapperDiv = isMobile ? MobileWrapper : TabletWrapper;

  const onToggleShow = (e: any) => {
    if (!cartWrapper.current) return;
    setIsShow(!isShow);
  };

  return (
    <WrapperDiv isShow={isShow} ref={cartWrapper}>
      <ContainerDiv>
        <ToggleButton onClick={onToggleShow}>On/Off</ToggleButton>
      </ContainerDiv>
    </WrapperDiv>
  );
};

export default Cart;
