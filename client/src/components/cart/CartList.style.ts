import styled from "@emotion/styled";
import {
  BOX_SHADOW,
  CANCEL_BTN_STYLE,
  COLOR,
  HIDE_SCROLL_BAR,
  TEXT_BODY_MEDIUM,
  TEXT_BOLD_MEDIUM,
  TEXT_DISPLAY_SMALL,
} from "@constants/style";

export const ContainerUL = styled.ul`
  ${HIDE_SCROLL_BAR}

  flex: 1 1 0;
  padding: 1rem;
  margin: 0 0 10px 0;
  list-style: none;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  row-gap: 8px;

  background-color: ${COLOR.offWhite};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  overflow-y: scroll;
`;

export const ItemLI = styled.li`
  padding: 0.5rem;

  ${BOX_SHADOW}

  width: 100%;

  display: flex;
  align-items: center;
`;

export const Image = styled.img<{ isMobile: boolean }>`
  ${({ isMobile }) =>
    isMobile
      ? `
      width: 5rem;
      height: 5rem;
    `
      : `
      width: 7.5rem;
      height: 7.5rem;
    `}
`;

export const ItemInfoSection = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const TitleH3 = styled.h3`
  ${TEXT_BOLD_MEDIUM}
  font-size: 1.5rem;

  margin: 0;
  padding: 0;
`;

export const PriceWrapperDiv = styled.div<{ isMobile: boolean }>`
  width: 100%;
  flex: 0;
  display: flex;
  ${({ isMobile }) =>
    isMobile
      ? `
    align-items: center;
    justify-content: space-between;
    `
      : `
    flex-direction: column;
    align-items: flex-start;
    `}
`;

export const PriceSpan = styled.span`
  ${TEXT_BODY_MEDIUM}
  font-size: 1.1rem;

  text-align: center;
  word-break: break-all;
`;

export const ButtonWrapperDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const CountSpan = styled.span`
  ${TEXT_BODY_MEDIUM}
  width: 3.75rem;
  padding: 0.125rem 0.5rem 0 0.5rem;
  font-size: 1.25rem;
  text-align: center;

  color: ${COLOR.titleActive};
  word-break: keep-all;
`;

export const CountButton = styled.button`
  width: 1.875rem;
  padding: 0.188rem;
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

export const DeleteButton = styled.button`
  ${CANCEL_BTN_STYLE}
  height: 100%;
  padding: 0.5rem;
  margin-left: 0.75rem;
  font-size: 1.2rem;
  border-radius: 5px;
  background-color: ${COLOR.yellow};

  &:hover {
    background-color: ${COLOR.orange};
  }
`;
