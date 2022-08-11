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
  max-height: calc(100% - 147px);

  transform: translateX(calc(-100% * ${({ selectedIndex }) => selectedIndex}));
  transition: transform 0.2s;
`;
