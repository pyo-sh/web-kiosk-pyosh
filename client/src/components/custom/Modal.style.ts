import { css } from "@emotion/css";
import { BOX_SHADOW } from "@constants/style";

interface modalStylePropType {
  zIndex?: number;
}

export const backgroundStyle = ({ zIndex }: modalStylePropType) => css`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${zIndex};

  background-color: rgba(0, 0, 0, 0.2);
`;

export const modalStyle = ({ zIndex }: modalStylePropType) => css`
  ${BOX_SHADOW}
  min-width: 400px;
  min-height: 100px;
  padding: 5px;

  position: absolute;
  z-index: ${zIndex};
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  opacity: 1;

  background-color: white;
`;
