import React from "react";
import Option from "@kiosk/common/types/option";

type OptionCountPropsType = {
  options: Option[];
  category: string;
};

const OptionCount: React.FC<OptionCountPropsType> = ({ category, options }) => {
  return (
    <div>
      <h3>{category}</h3>
      {options.map(({ name }) => {
        return name;
      })}
    </div>
  );
};

export default OptionCount;
