import { BTN_STYLE, CANCEL_BTN_STYLE } from "@constants/style";
import styled from "@emotion/styled";

export const ContainerDiv = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

export const BtnWrapperDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 2rem;
`;

export const PayButton = styled.button`
  ${BTN_STYLE}
  font-size: 1.5rem;
  flex: 1 1 auto;
  aspect-ratio: 1/1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 15px;
`;

export const CancelButton = styled.button`
  ${CANCEL_BTN_STYLE}
  margin-top: 2rem;
  padding: 0.5rem;
  font-size: 1.5rem;
  border-radius: 15px;
`;
