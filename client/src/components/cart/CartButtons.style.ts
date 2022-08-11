import styled from "@emotion/styled";
import { BTN_STYLE, CANCEL_BTN_STYLE, COLOR, TEXT_BOLD_LARGE } from "@constants/style";

export const ContainerDiv = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
`;

export const CancelButton = styled.button`
  ${CANCEL_BTN_STYLE}
  ${TEXT_BOLD_LARGE}
  font-size: 1.25rem;
  width: 4.375rem;
  height: 3.125rem;
  flex: 0 0 auto;
  border-radius: 5px;
`;

export const AcceptButton = styled.button`
  ${BTN_STYLE}
  ${TEXT_BOLD_LARGE}
  height: 3.125rem;
  font-size: 1.25rem;

  flex: 1 1 0;
  border-radius: 5px;
  color: ${COLOR.titleActive};
  background-color: ${COLOR.offWhite};
  &:hover {
    background-color: ${COLOR.line};
  }
`;
