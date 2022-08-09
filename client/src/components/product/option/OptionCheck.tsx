import React from "react";
import Option from "@kiosk/common/types/option";

type OptionCheckPropsType = {
  options: Option[];
  category: string;
};

const OptionCheck: React.FC<OptionCheckPropsType> = ({ category, options }) => {
  return (
    <div>
      <h3>{category}</h3>
      {options.map(({ name }) => {
        return name;
      })}
    </div>
  );
};

export default OptionCheck;
