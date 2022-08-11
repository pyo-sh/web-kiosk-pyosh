import React from "react";
import { ContainerUL } from "./CartList.style";
import { useCartDispatch, useCartState } from "@hooks/store/cart";
import { cartDeleteProduct, cartEditCount } from "@stores/cart";

const CartList: React.FC = () => {
  const cartDispatch = useCartDispatch();
  const { products } = useCartState();

  const onEditCount = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const cartIndex = Number(target.value);
    const gap = Number(target.getAttribute("data-gap")) || 0;
    cartDispatch(cartEditCount({ cartIndex, gap }));
  };

  const onDeleteProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const cartIndex = Number(target.value);
    cartDispatch(cartDeleteProduct({ cartIndex }));
  };

  return (
    <ContainerUL>
      {products.map(({ count, product, optionContent }, index) => {
        return (
          <div key={`${product.name}-${optionContent}`}>
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
            <button onClick={onDeleteProduct} value={index}>
              삭제
            </button>
          </div>
        );
      })}
    </ContainerUL>
  );
};

export default CartList;
