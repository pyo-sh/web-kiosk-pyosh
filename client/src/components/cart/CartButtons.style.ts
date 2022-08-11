import { BTN_STYLE, CANCEL_BTN_STYLE, COLOR, TEXT_BOLD_LARGE } from "@constants/style";
import styled from "@emotion/styled";

export const ContainerDiv = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
`;

export const CancelButton = styled.button`
  ${CANCEL_BTN_STYLE}
  ${TEXT_BOLD_LARGE}
  width: 70px;
  height: 50px;
  flex: 0 0 auto;
  border-radius: 5px;
`;

export const AcceptButton = styled.button`
  ${BTN_STYLE}
  ${TEXT_BOLD_LARGE}
  height: 50px;
  flex: 1 1 0;
  border-radius: 5px;
  color: ${COLOR.titleActive};
  background-color: ${COLOR.offWhite};
  &:hover {
    background-color: ${COLOR.line};
  }
`;
