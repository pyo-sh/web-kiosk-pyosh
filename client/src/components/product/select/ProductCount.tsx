import React from "react";
import { ContainerDiv, CountButton, CountSpan } from "./ProductCount.style";
import { useOptionDispatch, useOptionState } from "@hooks/store/option";
import { optionChangeCount } from "@src/stores/option";
import ArrowIcon from "@icons/ArrowIcon";

const ProductCount: React.FC = () => {
  const { count } = useOptionState();
  const optionDispatch = useOptionDispatch();

  const onClickCount = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget as HTMLInputElement;
    const gap = Number(target.getAttribute("data-gap")) || 0;

    optionDispatch(optionChangeCount({ gap }));
  };

  return (
    <ContainerDiv>
      <CountButton onClick={onClickCount} data-gap={-1}>
        <ArrowIcon rotate={90} />
      </CountButton>
      <CountSpan>{count || 0}</CountSpan>
      <CountButton onClick={onClickCount} data-gap={1}>
        <ArrowIcon rotate={-90} />
      </CountButton>
    </ContainerDiv>
  );
};

export default ProductCount;
