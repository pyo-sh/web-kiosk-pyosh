import styled from "@emotion/styled";
import { BOX_SHADOW, COLOR } from "@constants/style";

interface modalStylePropType {
  zIndex?: number;
}

export const BackgroundDiv = styled.div<modalStylePropType>`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${(props) => props.zIndex};

  background-color: rgba(0, 0, 0, 0.2);
`;

export const ContentDiv = styled.div<modalStylePropType>`
  ${BOX_SHADOW}
  min-width: 400px;
  max-width: 90vw;
  min-height: 100px;
  max-height: 80vh;
  padding: 5px;
  overflow-x: hidden;
  overflow-y: scroll;
  /* width */
  &::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${COLOR.primary};
    border-radius: 10px;
  }

  position: absolute;
  z-index: ${(props) => props.zIndex};
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  opacity: 1;

  background-color: white;
`;
