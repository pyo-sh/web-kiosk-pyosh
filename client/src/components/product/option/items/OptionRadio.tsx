import React from "react";
import { HideInput, NameTagSpan, RadioSpan, WrapperLabel } from "./OptionItems.style";
import Option from "@kiosk/common/types/option";
import { useOptionDispatch, useOptionState } from "@hooks/store/option";
import { RadioSelection } from "@constants/option";
import { optionSelectRadio } from "@src/stores/option";

type OptionRadioPropsType = {
  category: string;
  siblingOptions: Option[];
};

const OptionRadio: React.FC<OptionRadioPropsType> = ({ category, siblingOptions }) => {
  const optionDispatch = useOptionDispatch();
  const { picks } = useOptionState();
  const selects = picks[category] as RadioSelection;

  const onChangeRadio = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target as HTMLInputElement;
    optionDispatch(optionSelectRadio({ category, optionId: Number(value) }));
  };

  return (
    <>
      {siblingOptions.map(({ id, name, price }) => {
        const priceString = price ? ` (${price})` : "";
        return (
          <WrapperLabel key={`option-${id}`}>
            <HideInput
              onChange={onChangeRadio}
              type="radio"
              name={category}
              value={id}
              checked={selects === id}
            />
            <RadioSpan id={"radio"} />
            <NameTagSpan>
              {name}
              {priceString}
            </NameTagSpan>
          </WrapperLabel>
        );
      })}
    </>
  );
};

export default OptionRadio;
