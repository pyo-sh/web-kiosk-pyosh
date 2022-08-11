import React from "react";
import { ContainerDiv, OptionContainerDiv, OptionTitleH3 } from "./index.style";
import Option from "@kiosk/common/types/option";
import OptionRadio from "./OptionRadio";
import OptionCheck from "./OptionCheck";
import OptionCount from "./OptionCount";
import { useOptionState } from "@hooks/store/option";

const getOptionComponent = (optionType: string) => {
  switch (optionType) {
    case "radio":
      return OptionRadio;
    case "check":
      return OptionCheck;
    case "count":
      return OptionCount;
    default:
      return () => <></>;
  }
};

const ProductOption: React.FC = () => {
  const { optionsMap } = useOptionState();
  const categories = Array.from(optionsMap.keys());

  return (
    <ContainerDiv>
      {categories.map((category) => {
        const opts = optionsMap.get(category) as Option[];
        if (opts.length === 0) <></>;

        const optionType = opts[0].optionType;
        const OptionItems = getOptionComponent(optionType);
        return (
          <OptionContainerDiv key={`option-${category}`}>
            <OptionTitleH3>{category}</OptionTitleH3>
            <OptionItems category={category} siblingOptions={opts} />
          </OptionContainerDiv>
        );
      })}
    </ContainerDiv>
  );
};

export default ProductOption;
