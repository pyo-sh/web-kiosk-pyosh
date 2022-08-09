import { useOptionDispatch, useOptionState } from "@hooks/store/option";
import { optionChangeCount } from "@src/stores/option";
import React from "react";
import { ContainerDiv } from "./ProductCount.style";

const ProductCount: React.FC = () => {
  const { count } = useOptionState();
  const optionDispatch = useOptionDispatch();

  const onClickCount = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLInputElement;
    const { value } = target;
    const id = Number(value);
    const gap = Number(target.getAttribute("data-gap")) || 0;

    optionDispatch(optionChangeCount({ gap }));
  };

  return (
    <ContainerDiv>
      <button onClick={onClickCount} data-gap={-1}>
        {"<"}
      </button>
      <span>{count || 0}</span>
      <button onClick={onClickCount} data-gap={1}>
        {">"}
      </button>
    </ContainerDiv>
  );
};

export default ProductCount;
