import React from "react";
import Option from "@kiosk/common/types/option";
import { CountSelection } from "@constants/option";

type OptionCountPropsType = {
  options: Option[];
  category: string;
  selected: CountSelection;
  select: (category: string, id: number, count: number) => void;
};

const OptionCount: React.FC<OptionCountPropsType> = ({ category, options, selected, select }) => {
  const onClickCount = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLInputElement;
    const { value } = target;
    const id = Number(value);

    const type = target.getAttribute("data-type");
    const gap = type === "plus" ? 1 : -1;
    select(category, id, (selected[id] || 0) + gap);
  };

  return (
    <div>
      <h3>{category}</h3>
      {options.map(({ id, name, price }) => {
        const priceString = price ? ` (${price})` : "";
        return (
          <label key={`option-${id}`}>
            <span>
              {name}
              {priceString}
            </span>
            <button onClick={onClickCount} name={category} value={id} data-type={"minus"}>
              {"<"}
            </button>
            <span>{selected[id] || 0}</span>
            <button onClick={onClickCount} name={category} value={id} data-type={"plus"}>
              {">"}
            </button>
          </label>
        );
      })}
    </div>
  );
};

export default OptionCount;
