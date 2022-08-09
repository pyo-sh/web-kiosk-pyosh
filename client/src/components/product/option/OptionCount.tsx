import React from "react";
import Option from "@kiosk/common/types/option";
import { useOptionDispatch, useOptionState } from "@hooks/store/option";
import { CountSelection } from "@constants/option";
import { optionSelectCount } from "@src/stores/option";

type OptionCountPropsType = {
  category: string;
  siblingOptions: Option[];
};

const OptionCount: React.FC<OptionCountPropsType> = ({ category, siblingOptions }) => {
  const optionDispatch = useOptionDispatch();
  const { picks } = useOptionState();
  const selects = picks[category] as CountSelection;

  const onClickCount = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLInputElement;
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
          <label key={`option-${id}`}>
            <span>
              {name}
              {priceString}
            </span>
            <button onClick={onClickCount} name={category} value={id} data-gap={-1}>
              {"<"}
            </button>
            <span>{selects[id] || 0}</span>
            <button onClick={onClickCount} name={category} value={id} data-gap={1}>
              {">"}
            </button>
          </label>
        );
      })}
    </>
  );
};

export default OptionCount;
