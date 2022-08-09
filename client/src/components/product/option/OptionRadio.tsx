import React from "react";
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
          <label key={`option-${id}`}>
            <input
              onChange={onChangeRadio}
              type="radio"
              name={category}
              value={id}
              checked={selects === id}
            />
            <span>
              {name}
              {priceString}
            </span>
          </label>
        );
      })}
    </>
  );
};

export default OptionRadio;