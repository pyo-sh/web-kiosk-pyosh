import React from "react";
import { ContainerDiv } from "./index.style";
import Option from "@kiosk/common/types/option";
import { groupOptions } from "@utils/groupOptions";
import OptionRadio from "./OptionRadio";
import OptionCheck from "./OptionCheck";
import OptionCount from "./OptionCount";

type ProductOptionPropsType = {
  options: Option[];
};

const ProductOption: React.FC<ProductOptionPropsType> = ({ options }) => {
  const groupedOptions = groupOptions(options);
  const categories = Array.from(groupedOptions.keys());

  return (
    <ContainerDiv>
      {categories.map((category, i) => {
        const opts = groupedOptions.get(category) as Option[];
        if (opts.length === 0) <></>;

        const optionType = opts[0].optionType;
        if (optionType === "radio")
          return <OptionRadio key={`option-${category}`} category={category} options={opts} />;
        if (optionType === "check")
          return <OptionCheck key={`option-${category}`} category={category} options={opts} />;
        if (optionType === "count")
          return <OptionCount key={`option-${category}`} category={category} options={opts} />;
        return <></>;
      })}
    </ContainerDiv>
  );
};

export default ProductOption;
