import { COLOR, PROTECT_DRAG } from "@constants/style";
import styled from "@emotion/styled";

export const ContainerDiv = styled.div<{ isMobile: boolean }>`
  ${PROTECT_DRAG}
  display: flex;
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
  align-items: center;
  justify-content: center;

  margin: 20px;
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
