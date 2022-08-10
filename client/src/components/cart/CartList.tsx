import { ContainerUL } from "@components/product/ProductList.style";
import { useCartDispatch, useCartState } from "@hooks/store/cart";
import { cartEditCount } from "@stores/cart";
import React from "react";

const CartList: React.FC = () => {
  const cartDispatch = useCartDispatch();
  const { products } = useCartState();

  const onEditCount = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const cartIndex = Number(target.value);
    const gap = Number(target.getAttribute("data-gap")) || 0;
    cartDispatch(cartEditCount({ cartIndex, gap }));
  };

  return (
    <ContainerUL>
      {products.map(({ count, product, optionContent }, index) => {
        return (
          <div>
            <span>
              {product.name}({optionContent}) {count}개
            </span>
            <div>
              <button onClick={onEditCount} value={index} data-gap={-1}>
                -
              </button>
              <button onClick={onEditCount} value={index} data-gap={1}>
                +
              </button>
            </div>
          </div>
        );
      })}
    </ContainerUL>
  );
};

export default CartList;
