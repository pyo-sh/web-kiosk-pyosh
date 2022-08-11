import { COLOR } from "@constants/style";
import React from "react";

type XIconPropsType = {
  width?: number;
  height?: number;
  color?: string;
};

const XIcon: React.FC<XIconPropsType> = ({ width, height, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 16}
      height={height || 16}
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M12 4L4 12"
        stroke={color || COLOR.titleActive}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4 4L12 12"
        stroke={color || COLOR.titleActive}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default XIcon;
