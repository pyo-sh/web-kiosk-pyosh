import React from "react";
import Option from "@kiosk/common/types/option";

type OptionRadioPropsType = {
  options: Option[];
  category: string;
};

const OptionRadio: React.FC<OptionRadioPropsType> = ({ category, options }) => {
  return (
    <div>
      <h3>{category}</h3>
      {options.map(({ name }) => {
        return name;
      })}
    </div>
  );
};

export default OptionRadio;
