import React, { useContext, useRef } from "react";
import {
  ContainerUL,
  CountButton,
  DeleteButton,
  Image,
  ItemInfoSection,
  ItemLI,
  TitleH3,
  ButtonWrapperDiv,
  CountSpan,
  PriceSpan,
  PriceWrapperDiv,
  OptionWrapperDiv,
  ContentDiv,
} from "./CartList.style";
import { useCartDispatch, useCartState } from "@hooks/store/cart";
import { cartDeleteProduct, cartEditCount } from "@stores/cart";
import { MediaContext } from "@hooks/useMediaQuery";
import ArrowIcon from "@icons/ArrowIcon";
import useDraggable from "@hooks/useDraggable";

const CartList: React.FC = () => {
  const isMobile = useContext(MediaContext);
  const cartDispatch = useCartDispatch();
  const { products } = useCartState();

  const onEditCount = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget as HTMLButtonElement;
    const cartIndex = Number(target.value);
    const gap = Number(target.getAttribute("data-gap")) || 0;
    cartDispatch(cartEditCount({ cartIndex, gap }));
  };

  const onDeleteProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget as HTMLButtonElement;
    const cartIndex = Number(target.value);
    cartDispatch(cartDeleteProduct({ cartIndex }));
  };

  const optionRef = useRef<HTMLDivElement>(null);
  const handleDragOption = ({ movementX }: React.MouseEvent<HTMLDivElement>) => {
    if (optionRef.current) {
      optionRef.current.scrollLeft -= movementX * 2;
    }
  };
  const [onMouseDownOpt, onMouseMoveOpt, onMouseUpOpt, onMouseLeaveOpt] = useDraggable({
    handleDrag: handleDragOption,
  });

  return (
    <ContainerUL>
      {products.map(({ count, product, optionContents, optionPrice }, index) => {
        const { name, image, price } = product;
        const optionContent = optionContents;
        const nowPrice = (price + optionPrice) * count;
        return (
          <ItemLI key={`${name}-${index}`}>
            <Image isMobile={isMobile} src={image} />
            <ItemInfoSection>
              <TitleH3>{product.name}</TitleH3>
              <OptionWrapperDiv
                ref={optionRef}
                onMouseDown={onMouseDownOpt}
                onMouseMove={onMouseMoveOpt}
                onMouseUp={onMouseUpOpt}
                onMouseLeave={onMouseLeaveOpt}
              >
                {optionContent.map((name) => (
                  <ContentDiv key={name}>{name}</ContentDiv>
                ))}
              </OptionWrapperDiv>
              <PriceWrapperDiv isMobile={isMobile}>
                <ButtonWrapperDiv>
                  <CountButton onClick={onEditCount} value={index} data-gap={-1}>
                    <ArrowIcon rotate={90} />
                  </CountButton>
                  <CountSpan>{count}</CountSpan>
                  <CountButton onClick={onEditCount} value={index} data-gap={1}>
                    <ArrowIcon rotate={-90} />
                  </CountButton>
                </ButtonWrapperDiv>
                <PriceSpan>{nowPrice}원</PriceSpan>
              </PriceWrapperDiv>
            </ItemInfoSection>
            <DeleteButton onClick={onDeleteProduct} value={index}>
              제<br />거
            </DeleteButton>
          </ItemLI>
        );
      })}
    </ContainerUL>
  );
};

export default CartList;
