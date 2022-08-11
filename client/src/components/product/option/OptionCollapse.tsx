import React, { useState } from "react";
import { ContainerDiv, InfoDiv, SignSpan, SliderDiv, TitleH3 } from "./OptionCollapse.style";
import OptionType, { OptionEnum } from "@kiosk/common/types/option";
import OptionCheck from "./items/OptionCheck";
import OptionCount from "./items/OptionCount";
import OptionRadio from "./items/OptionRadio";

type OptionCollapsePropsType = {
  category: string;
  options: OptionType[];
  optionType: OptionEnum;
};

const getOptionComponent = (optionType: OptionEnum) => {
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

const OptionCollapse: React.FC<OptionCollapsePropsType> = ({ category, options, optionType }) => {
  const [isOpen, setIsOpen] = useState<boolean>(optionType === "radio");
  const OptionItems = getOptionComponent(optionType);

  return (
    <ContainerDiv>
      <InfoDiv onClick={() => setIsOpen((prev) => !prev)}>
        <TitleH3>{category}</TitleH3>
        <SignSpan isOpen={isOpen} />
      </InfoDiv>
      <SliderDiv isOpen={isOpen}>
        <OptionItems category={category} siblingOptions={options} />
      </SliderDiv>
    </ContainerDiv>
  );
};

export default OptionCollapse;
