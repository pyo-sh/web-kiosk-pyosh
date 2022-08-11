import React from "react";
import Option from "@kiosk/common/types/option";
import { useOptionDispatch, useOptionState } from "@hooks/store/option";
import { CountSelection } from "@constants/option";
import { optionSelectCount } from "@src/stores/option";
import {
  CountButton,
  CountNameTagSpan,
  CountSection,
  CountSpan,
  NameTagSpan,
  WrapperCountLabel,
} from "./OptionItem.style";
import ArrowIcon from "@icons/ArrowIcon";

type OptionCountPropsType = {
  category: string;
  siblingOptions: Option[];
};

const OptionCount: React.FC<OptionCountPropsType> = ({ category, siblingOptions }) => {
  const optionDispatch = useOptionDispatch();
  const { picks } = useOptionState();
  const selects = picks[category] as CountSelection;

  const onClickCount = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget as HTMLInputElement;
    const { value } = target;
    const id = Number(value);
    const gap = Number(target.getAttribute("data-gap")) || 0;

    optionDispatch(optionSelectCount({ category, optionId: id, gap }));
  };

  return (
    <>
      {siblingOptions.map(({ id, name, price }) => {
        const priceString = price ? ` (${price})` : "";
        return (
          <WrapperCountLabel key={`option-${id}`}>
            <CountNameTagSpan>
              {name}
              {priceString}
            </CountNameTagSpan>
            <CountSection>
              <CountButton onClick={onClickCount} name={category} value={id} data-gap={-1}>
                <ArrowIcon rotate={90} />
              </CountButton>
              <CountSpan>{selects[id] || 0}</CountSpan>
              <CountButton onClick={onClickCount} name={category} value={id} data-gap={1}>
                <ArrowIcon rotate={-90} />
              </CountButton>
            </CountSection>
          </WrapperCountLabel>
        );
      })}
    </>
  );
};

export default OptionCount;
