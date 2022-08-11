import { COLOR, PROTECT_DRAG } from "@constants/style";
import { css, keyframes } from "@emotion/css";
import styled from "@emotion/styled";

const showOn = keyframes`
  0% {
    left: 0;
    opacity: 0;
  }
  100% {
    left: 50%;
    opacity: 1;
  }
`;

export const ModalShowAnimateCSS = css`
  animation: ${showOn} ease-in 0.2s;
`;

const showOff = keyframes`
  0% {
    left: 50%;
    opacity: 1;
  }
  100% {
    left: 100%;
    opacity: 0;
  }
`;

export const ModalExitAnimateCSS = css`
  animation: ease-out ${showOff} 0.1s forwards;
`;

export const ContainerDiv = styled.div<{ isMobile: boolean }>`
  ${PROTECT_DRAG}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 20px;
  ${({ isMobile }) =>
    isMobile
      ? `
      word-break: break-all;
      white-space: normal;
    `
      : `
      align-items: flex-start;
      word-break: keep-all;
      white-space: nowrap;
    `}
`;

export const ButtonWrapperDiv = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
`;

export const CloseButton = styled.button`
  width: 25px;
  height: 25px;
  padding: 5px;
  margin: 0;
  outline: none;
  border: none;

  background-color: ${COLOR.darkGreen};
  position: relative;

  cursor: pointer;
  border-radius: 50%;
  &:hover {
    background-color: ${COLOR.primary2};
  }
`;

export const CollectorWrapperDiv = styled.div<{ isMobile: boolean }>`
  display: flex;
  ${({ isMobile }) =>
    isMobile
      ? `
      flex-direction: column;
      align-items: center;
    `
      : `
      flex-direction: row;
      align-items: flex-start;
    `}
`;
