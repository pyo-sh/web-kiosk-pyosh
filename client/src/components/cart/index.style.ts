import styled from "@emotion/styled";
import { COLOR, TEXT_DISPLAY_SMALL } from "@constants/style";

export const CART_TABLET_WIDTH = 31.25;
export const CART_MOBILE_HEIGHT = 23.125;

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
  padding: 1rem;
  ${(props) =>
    props.isMobile ? `height: ${CART_MOBILE_HEIGHT}rem;` : `width: ${CART_TABLET_WIDTH}rem;`}

  ${({ isShow, isMobile }) => {
    if (!isMobile) return "";
    return isShow ? "bottom: 0px" : `bottom: -${CART_MOBILE_HEIGHT - 1}rem`;
  }};
  ${({ isShow, isMobile }) => {
    if (isMobile) return "";
    return isShow ? "right: 0px" : `right: -${CART_TABLET_WIDTH - 1}rem`;
  }};
  transition: 0.3s ease-in;
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
  width: 3.125rem;
  height: 1.563rem;
  position: relative;

  outline: none;
  border: 0.063rem solid ${COLOR.line};
  border-radius: 5px;
  background-color: ${COLOR.offWhite};
  cursor: pointer;

  ${(props) =>
    props.isMobile
      ? `
    bottom: 1.875rem;
  `
      : `
    right: 2.5rem;
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

export const CartInfoDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TotalDiv = styled.div`
  ${TEXT_DISPLAY_SMALL};
  font-size: 2rem;
  width: 100%;
  padding: 10px 0;
  word-break: keep-all;
  text-align: end;
  color: ${COLOR.offWhite};
`;
