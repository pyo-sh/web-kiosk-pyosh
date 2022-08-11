import { COLOR, TEXT_BOLD_LARGE, TEXT_BOLD_MEDIUM } from "@constants/style";
import styled from "@emotion/styled";

export const WrapperLabel = styled.label`
  padding-left: 0.5rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;

  color: ${COLOR.titleActive};
  cursor: pointer;
`;

export const HideInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

  &:checked ~ #radio {
    background-color: ${COLOR.primary};
  }
`;

export const RadioSpan = styled.span`
  width: 1.375rem;
  height: 1.375rem;
  display: block;
  margin: 0;
  position: relative;
  border-radius: 50%;
  background-color: ${COLOR.label};

  &::after {
    content: "";
    position: absolute;
    left: 0.438rem;
    top: 0.438rem;
    width: 0.5rem;
    height: 0.5rem;
    background-color: ${COLOR.offWhite};
    border-radius: 50%;
  }
`;

export const NameTagSpan = styled.span`
  ${TEXT_BOLD_MEDIUM}
  padding: 0.125rem 0.5rem 0 0.5rem;
  font-size: 1.125rem;
`;

export const CountButton = styled.button``;
