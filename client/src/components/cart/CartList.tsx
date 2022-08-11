import React, { useContext } from "react";
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
} from "./CartList.style";
import { useCartDispatch, useCartState } from "@hooks/store/cart";
import { cartDeleteProduct, cartEditCount } from "@stores/cart";
import { MediaContext } from "@hooks/useMediaQuery";
import ArrowIcon from "@icons/ArrowIcon";

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
  console.log(products);

  return (
    <ContainerUL>
      {products.map(({ count, product, optionContent, price }, index) => {
        const { name, image } = product;
        const optionContents = optionContent;
        return (
          <ItemLI key={`${name}-${optionContents}`}>
            <Image isMobile={isMobile} src={image} />
            <ItemInfoSection>
              <TitleH3>{product.name}</TitleH3>
              <div>{price}</div>
              <ButtonWrapperDiv>
                <CountButton onClick={onEditCount} value={index} data-gap={-1}>
                  <ArrowIcon rotate={90} />
                </CountButton>
                <CountSpan>{count}</CountSpan>
                <CountButton onClick={onEditCount} value={index} data-gap={1}>
                  <ArrowIcon rotate={-90} />
                </CountButton>
              </ButtonWrapperDiv>
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
