import styled from "@emotion/styled";

export const CART_TABLET_WIDTH = "300px";
export const CART_MOBILE_HEIGHT = "200px";

type WrapperPropsType = {
  isShow: boolean;
};

export const MobileWrapper = styled.div<WrapperPropsType>`
  flex: 0 0 auto;

  width: 100%;
  height: ${(props) => (props.isShow ? CART_MOBILE_HEIGHT : "25px")};

  display: absolute;
  bottom: 0;
  transition: 0.8s;
`;

export const TabletWrapper = styled.div<WrapperPropsType>`
  flex: 0 0 auto;

  width: ${(props) => (props.isShow ? CART_TABLET_WIDTH : "25px")};
  height: 100%;
  transition: 0.8s;
`;

export const ContainerDiv = styled.div`
  width: 100%;
  height: 100%;

  background-color: black;
`;

export const ToggleButton = styled.button`
  position: relative;
`;
