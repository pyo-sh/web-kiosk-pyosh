import { BTN_STYLE, PROTECT_DRAG, TEXT_BODY_LARGE } from "@constants/style";
import styled from "@emotion/styled";

export const ContainerDiv = styled.div`
  ${PROTECT_DRAG}
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BillDiv = styled.div`
  width: 360px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

export const TitleH1 = styled.h1`
  font-size: 2rem;
`;

export const InfoDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;

export const InfoSpan = styled.span`
  ${TEXT_BODY_LARGE}
`;

export const BackButton = styled.button`
  ${BTN_STYLE}
  width: 360px;
  margin-top: 2rem;
  padding: 2rem;

  border-radius: 15px;
`;
