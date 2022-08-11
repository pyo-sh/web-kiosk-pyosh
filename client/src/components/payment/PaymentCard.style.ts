import styled from "@emotion/styled";
import { keyframes } from "@emotion/css";
import { COLOR } from "@constants/style";

export const ContainerDiv = styled.div`
  width: 25rem;
  height: 25rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const grdAiguille = keyframes`
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
`;

const CLOCK_SIZE = 200;

export const ClockLoaderDiv = styled.div`
  width: ${CLOCK_SIZE + 10}px;
  height: ${CLOCK_SIZE + 10}px;
  position: relative;
  border: 3px solid ${COLOR.primary};
  border-radius: 50%;

  &:after {
    content: "";
    width: 4px;
    height: ${CLOCK_SIZE / 2}px;
    position: absolute;
    left: 50%;
    border-radius: 5px;
    background-color: ${COLOR.primary};
    transform-origin: 50% 100%;
    animation: grdAiguille 2s linear infinite;
  }

  &:before {
    content: "";
    width: 4px;
    height: ${CLOCK_SIZE * 0.3}px;
    position: absolute;
    top: ${CLOCK_SIZE / 2 - CLOCK_SIZE * 0.3}px;
    left: 50%;
    border-radius: 5px;
    background-color: ${COLOR.primary};
    transform-origin: 50% 100%;
    animation: grdAiguille 12s linear infinite;
  }
`;
