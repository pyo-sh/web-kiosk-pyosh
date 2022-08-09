import React from "react";
import Option from "@kiosk/common/types/option";
import { CheckSelection } from "@constants/option";

type OptionCheckPropsType = {
  options: Option[];
  category: string;
  selected: CheckSelection;
  select: (category: string, id: number) => void;
};

const OptionCheck: React.FC<OptionCheckPropsType> = ({ category, options, selected, select }) => {
  const onChangeCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
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
              onChange={onChangeCheck}
              type="checkbox"
              name={category}
              value={id}
              checked={selected?.has(id)}
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

export default OptionCheck;
