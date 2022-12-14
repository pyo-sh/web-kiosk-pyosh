import styled from "@emotion/styled";
import { HIDE_SCROLL_BAR } from "@constants/style";

export const WrapperDiv = styled.div`
  flex: 0 0 auto;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export const ContainerUL = styled.ul`
  ${HIDE_SCROLL_BAR}
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 15px;

  display: grid;
  justify-content: center;
  align-content: start;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (min-width: 480px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 730px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 860px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (min-width: 1000px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
