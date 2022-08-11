import styled from "@emotion/styled";
import { COLOR, HIDE_SCROLL_BAR } from "@constants/style";

export const ContainerUL = styled.ul`
  flex: 1 1 0;
  padding: 8px;
  margin: 0 0 10px 0;
  list-style: none;

  background-color: ${COLOR.offWhite};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  overflow-y: scroll;
  ${HIDE_SCROLL_BAR}
`;
