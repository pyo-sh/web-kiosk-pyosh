import styled from "@emotion/styled";

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1 1 0;
  // To do not overflow Cart
  overflow: hidden;
`;

export const MenuWrapperDiv = styled.div<{ selectedIndex: number }>`
  flex: 1;
  display: flex;

  transform: translate3d(calc(-100% * ${({ selectedIndex }) => selectedIndex}), 0, 0);
  transition: transform 0.2s;
`;
