import styled from "@emotion/styled";
import { COLOR, HIDE_SCROLL_BAR, PROTECT_DRAG, TEXT_DISPLAY_LARGE } from "@constants/style";

export const ContainerHeader = styled.header`
  ${PROTECT_DRAG}
`;

export const TitleH1 = styled.h1`
  ${TEXT_DISPLAY_LARGE}
  padding: 30px 30px 15px 30px;
  margin: 0;
`;

export const MenuNav = styled.nav`
  width: 100%;
  height: 46px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ControlButton = styled.button`
  width: 46px;
  height: 100%;

  flex: 0 0 46px;
  display: sticky;

  cursor: pointer;
  outline: none;
  border: 1px solid ${COLOR.line};
  border-left: none;
  border-bottom: 1px solid ${COLOR.white};
  border-top-right-radius: 10px;
  background-color: transparent;
`;

export const MenuUL = styled.ul`
  height: 100%;
  margin: 0;
  padding: 0;

  flex: 1 0 0;
  display: flex;
  align-items: center;

  border-bottom: 1px solid ${COLOR.line};
  list-style: none;

  overflow-x: scroll;
  ${HIDE_SCROLL_BAR}

  & > li {
    padding: 10px;
    min-width: 100px;
    height: 100%;

    flex: 0 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: ${COLOR.background};
      border-bottom: 2px solid ${COLOR.primary};
    }
  }
`;
