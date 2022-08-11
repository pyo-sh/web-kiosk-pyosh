import React from "react";
import Option from "@kiosk/common/types/option";
import { useOptionDispatch, useOptionState } from "@hooks/store/option";
import { CheckSelection } from "@constants/option";
import { optionSelectCheck } from "@src/stores/option";
import { WrapperLabel } from "./OptionItem.style";

type OptionCheckPropsType = {
  category: string;
  siblingOptions: Option[];
};

const OptionCheck: React.FC<OptionCheckPropsType> = ({ category, siblingOptions }) => {
  const optionDispatch = useOptionDispatch();
  const { picks } = useOptionState();
  const selects = picks[category] as CheckSelection;

  const onChangeCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    optionDispatch(optionSelectCheck({ category, optionId: Number(value) }));
  };

  return (
    <>
      {siblingOptions.map(({ id, name, price }) => {
        const priceString = price ? ` (${price})` : "";
        return (
          <WrapperLabel key={`option-${id}`}>
            <input
              onChange={onChangeCheck}
              type="checkbox"
              name={category}
              value={id}
              checked={selects?.has(id)}
            />
            <span>
              {name}
              {priceString}
            </span>
          </WrapperLabel>
        );
      })}
    </>
  );
};

export default OptionCheck;
