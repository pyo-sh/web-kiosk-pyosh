import { PROTECT_DRAG_IMAGE, TEXT_BODY_MEDIUM, TEXT_DISPLAY_SMALL } from "@constants/style";
import styled from "@emotion/styled";

export const ContainerDiv = styled.div`
  min-width: 13.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  ${PROTECT_DRAG_IMAGE}
  width: 100%;
  object-fit: contain;
  aspect-ratio: 1/1;
`;

export const TitleH3 = styled.h3`
  ${TEXT_DISPLAY_SMALL}
  font-size: 1.2rem;
  padding: 0;
  margin: 10px 0 0 0;

  text-align: center;
  word-break: break-all;
`;

export const PriceSpan = styled.span`
  ${TEXT_BODY_MEDIUM}
  margin: 10px 0;
  text-align: center;
  word-break: break-all;
`;
