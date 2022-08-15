import styled from "@emotion/styled";
import { COLOR, TEXT_DISPLAY_SMALL } from "@constants/style";

export const ContainerDiv = styled.div`
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CountButton = styled.button`
  width: 50px;
  padding: 5px;
  margin: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  color: ${COLOR.offWhite};
  background-color: ${COLOR.darkGreen};

  &:hover {
    background-color: ${COLOR.primary2};
  }
`;

export const CountSpan = styled.span`
  ${TEXT_DISPLAY_SMALL}
  margin: 0 5px;

  color: ${COLOR.titleActive};
  word-break: keep-all;
`;
