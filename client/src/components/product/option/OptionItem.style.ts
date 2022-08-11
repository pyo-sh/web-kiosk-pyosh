import { COLOR, TEXT_BODY_REGULAR, TEXT_BOLD_LARGE, TEXT_BOLD_MEDIUM } from "@constants/style";
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

  &:checked ~ #radio,
  &:checked ~ #check {
    background-color: ${COLOR.primary};
  }
`;

export const RadioSpan = styled.span`
  width: 1.375rem;
  height: 1.375rem;
  margin: 0;
  display: block;
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

export const CheckSpan = styled.span`
  width: 1.375rem;
  height: 1.375rem;
  display: block;
  position: relative;
  border-radius: 0.188rem;
  background-color: ${COLOR.label};

  &::after {
    content: "";
    position: absolute;
    left: 0.5rem;
    top: 0.125rem;
    width: 0.313rem;
    height: 0.75rem;
    border: solid ${COLOR.offWhite};
    border-width: 0 0.125rem 0.125rem 0;
    transform: rotate(45deg);
  }
`;

export const NameTagSpan = styled.span`
  ${TEXT_BODY_REGULAR}
  padding: 0.125rem 0.5rem 0 0.5rem;
  font-size: 1.125rem;
`;

export const CountButton = styled.button``;
