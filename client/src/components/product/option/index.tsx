import React, { useState } from "react";
import { ContainerDiv } from "./index.style";
import Option from "@kiosk/common/types/option";
import OptionRadio, { RadioSelection } from "./OptionRadio";
import OptionCheck, { CheckSelection } from "./OptionCheck";
import OptionCount, { CountSelection } from "./OptionCount";
import useOptionSelect from "@hooks/useOptionSelect";

type ProductOptionPropsType = {
  options: Option[];
};

const ProductOption: React.FC<ProductOptionPropsType> = ({ options }) => {
  const { groupedOptions, selection, setSelections } = useOptionSelect(options);
  const categories = Array.from(groupedOptions.keys());
  return (
    <ContainerDiv>
      {categories.map((category) => {
        const opts = groupedOptions.get(category) as Option[];
        if (opts.length === 0) <></>;

        const optionType = opts[0].optionType;
        if (optionType === "count")
          return (
            <OptionRadio
              key={`option-${category}`}
              category={category}
              options={opts}
              selected={selection[category] as RadioSelection}
              select={setSelections["radio"]}
            />
          );
        if (optionType === "check")
          return (
            <OptionCheck
              key={`option-${category}`}
              category={category}
              options={opts}
              selected={selection[category] as CheckSelection}
              select={setSelections["check"]}
            />
          );
        if (optionType === "radio")
          return (
            <OptionCount
              key={`option-${category}`}
              category={category}
              options={opts}
              selected={selection[category] as CountSelection}
              select={setSelections["count"]}
            />
          );
        return <></>;
      })}
    </ContainerDiv>
  );
};

export default ProductOption;
