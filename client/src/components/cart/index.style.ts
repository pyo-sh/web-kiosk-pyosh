import { COLOR, TEXT_BOLD_MEDIUM, TEXT_DISPLAY_SMALL } from "@constants/style";
import styled from "@emotion/styled";

export const CART_TABLET_WIDTH = 300;
export const CART_MOBILE_HEIGHT = 370;

export const WrapperDiv = styled.div<{ isMobile: boolean }>`
  flex: 0 0 auto;

  ${(props) => (props.isMobile ? "width: 100%" : "height: 100%")};
  position: relative;
  bottom: 0;
  right: 0;

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const ContainerDiv = styled.div<{ isMobile: boolean; isShow: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 15px;
  ${(props) =>
    props.isMobile ? `height: ${CART_MOBILE_HEIGHT}px;` : `width: ${CART_TABLET_WIDTH}px;`}

  ${({ isShow, isMobile }) => {
    if (!isMobile) return "";
    return isShow ? "bottom: 0px" : `bottom: -${CART_MOBILE_HEIGHT - 15}px`;
  }};
  ${({ isShow, isMobile }) => {
    if (isMobile) return "";
    return isShow ? "right: 0px" : `right: -${CART_TABLET_WIDTH - 15}px`;
  }};
  transition: 0.8s;
  background-color: ${COLOR.primary};
  border-radius: 10px;

  display: flex;
  flex-direction: column;
`;

export const ButtonWrapperDiv = styled.div<{ isMobile: boolean }>`
  position: absolute;
  ${(props) => (props.isMobile ? "left: calc(50% - 25px);" : "top: calc(50% - 25px);")}
`;

export const ToggleButton = styled.button<{ isMobile: boolean }>`
  width: 50px;
  height: 25px;
  position: relative;

  outline: none;
  border: 1px solid ${COLOR.line};
  border-radius: 5px;
  background-color: ${COLOR.offWhite};
  cursor: pointer;

  ${(props) =>
    props.isMobile
      ? `
    bottom: 30px;
  `
      : `
    right: 40px;
    transform: rotate(90deg);
  `};

  &::after,
  &::before {
    content: "";
    width: 80%;
    height: 2px;

    transform: translateX(-50%) translateY(2px);
    position: absolute;
    background-color: ${COLOR.label};
    border-radius: 10px;
  }
  &::before {
    top: 5px;
  }
`;

export const TotalDiv = styled.div`
  ${TEXT_DISPLAY_SMALL};
  width: 100%;
  padding: 10px 0;
  word-break: keep-all;
  text-align: end;
  color: ${COLOR.offWhite};
`;
