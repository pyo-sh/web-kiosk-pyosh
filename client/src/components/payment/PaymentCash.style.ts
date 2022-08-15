import { BTN_STYLE, CANCEL_BTN_STYLE } from "@constants/style";
import styled from "@emotion/styled";

export const ContainerDiv = styled.div`
  width: 25rem;
  height: 25rem;
  padding: 0;
  padding-left: 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CashWrapperDiv = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

export const CashButton = styled.button`
  ${BTN_STYLE}
  font-size: 1.25rem;
  height: 4rem;
  border-radius: 5px;
`;

export const PayInfoDiv = styled.div`
  width: 100%;
  margin: 0.5rem 0;
  padding: 0 0.25rem;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  row-gap: 0.5rem;
`;

export const PayInfoSpan = styled.span`
  font-size: 1.25rem;
`;

export const CancelButton = styled.button`
  ${CANCEL_BTN_STYLE}
  width: 100%;
  padding: 1rem;
  font-size: 1.25rem;
  border-radius: 5px;
`;
