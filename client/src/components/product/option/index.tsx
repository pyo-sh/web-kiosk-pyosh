import React from "react";
import { ContainerDiv, OptionContainerDiv, OptionTitleH3 } from "./index.style";
import OptionType from "@kiosk/common/types/option";
import { useOptionState } from "@hooks/store/option";
import OptionCollapse from "./OptionCollapse";

const ProductOption: React.FC = () => {
  const { optionsMap } = useOptionState();
  const categories = Array.from(optionsMap.keys());

  return (
    <ContainerDiv>
      {categories.map((category) => {
        const opts = optionsMap.get(category) as OptionType[];
        const optionType = opts[0].optionType;
        return (
          <OptionCollapse
            key={`category-${category}`}
            category={category}
            options={opts}
            optionType={optionType}
          />
        );
      })}
    </ContainerDiv>
  );
};

export default ProductOption;
