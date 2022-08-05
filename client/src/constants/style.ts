import { css } from "@emotion/css";

export const COLOR = Object.freeze({
  primary: "#2AC1BC",
  primary2: "#A0E1E0",
  primary3: "#4CB8B8",
  titleActive: "#1E2019",
  body: "#626666",
  label: "#8D9393",
  placeholder: "#C1C5C5",
  line: "#CCD3D3",
  background: "#F5F5F5",
  offWhite: "#FCFCFC",
  error: "#F45452",
  lightError: "#FFD4D3",
  darkError: "#CD6766",
  darkGreen: "#394032",
  white: "#ffffff",
});

export const INPUT_STYLE = css`
  padding: 0;
  margin: 0;
  outline: none;
  color: ${COLOR.titleActive};
  border: 1px solid ${COLOR.line};
  &:focus {
    border: 1px solid ${COLOR.primary};
  }
`;

export const BTN_STYLE = css`
  padding: 0;
  margin: 0;
  background-color: ${COLOR.primary};
  color: ${COLOR.offWhite};
  border: 2px solid transparent;
  cursor: pointer;
  &:hover {
    background-color: ${COLOR.primary3};
  }
  &:focus {
    border: 2px solid ${COLOR.primary2};
  }
  &:disabled {
    background-color: ${COLOR.primary2};
  }
`;

export const CANCEL_BTN_STYLE = css`
  padding: 0;
  margin: 0;
  background-color: ${COLOR.error};
  color: ${COLOR.offWhite};
  border: 2px solid transparent;
  cursor: pointer;
  &:hover {
    background-color: ${COLOR.darkError};
  }
  &:focus {
    border: 2px solid ${COLOR.lightError};
  }
  &:disabled {
    background-color: ${COLOR.lightError};
  }
`;

export const BOX_SHADOW = css`
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 4px 20px rgba(0, 0, 0, 0.1);
`;

export const TEXT_DISPLAY_LARGE = css`
  font-family: "BMDOHYEON";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
`;

export const TEXT_DISPLAY_SMALL = css`
  font-family: "BMDOHYEON";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
`;

export const TEXT_BODY_REGULAR = css`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

export const TEXT_BODY_MEDIUM = css`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
`;

export const TEXT_BODY_LARGE = css`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 32px;
`;

export const TEXT_BOLD_SMALL = css`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
`;

export const TEXT_BOLD_MEDIUM = css`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
`;

export const TEXT_BOLD_LARGE = css`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
`;

export const PROTECT_DRAG = css`
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`;
