import React from "react";
import Option from "@kiosk/common/types/option";
import { RadioSelection } from "@constants/option";

type OptionRadioPropsType = {
  options: Option[];
  category: string;
  selected: RadioSelection;
  select: (category: string, id: number) => void;
};

const OptionRadio: React.FC<OptionRadioPropsType> = ({ category, options, selected, select }) => {
  const onChangeRadio = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target as HTMLInputElement;
    select(category, Number(value));
  };

  return (
    <div>
      <h3>{category}</h3>
      {options.map(({ id, name, price }) => {
        const priceString = price ? ` (${price})` : "";
        return (
          <label key={`option-${id}`}>
            <input
              onChange={onChangeRadio}
              type="radio"
              name={category}
              value={id}
              checked={selected === id}
            />
            <span>
              {name}
              {priceString}
            </span>
          </label>
        );
      })}
    </div>
  );
};

export default OptionRadio;
