import { COLOR, TEXT_BODY_MEDIUM } from "@constants/style";
import styled from "@emotion/styled";

export const ContainerDiv = styled.div`
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid ${COLOR.line};

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  &:last-child {
    margin-top: 10px;
    padding-top: 10px;
    border-bottom: none;
  }
`;

export const InfoDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const TitleH3 = styled.h3`
  ${TEXT_BODY_MEDIUM}
  font-size: 1.25rem;
  padding: 0;
  margin: 0 8px 0 0;
`;

export const SignSpan = styled.span<{ isOpen: boolean }>`
  width: 0.875rem;
  height: 0.875rem;
  padding: 0;
  border: none;
  outline: none;
  background-color: ${COLOR.offWhite};
  color: ${COLOR.titleActive};
  cursor: pointer;
  position: relative;
  top: 0.25rem;

  &::before,
  &::after {
    content: "";
    width: 0.875rem;
    height: 0.125rem;

    display: block;
    position: absolute;

    background-color: ${COLOR.darkGreen};
    border-radius: 10px;
    transition: transform 0.2s ease-out;
  }
  &::after {
    ${({ isOpen }) => (isOpen ? "" : "transform: rotate(90deg)")};
  }
`;

export const SliderDiv = styled.div<{ isOpen: boolean }>`
  max-height: ${({ isOpen }) => (isOpen ? "80vh" : "0px")};
  margin-top: ${({ isOpen }) => (isOpen ? "1rem" : "0px")};
  overflow: hidden;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 0.5rem;
`;
