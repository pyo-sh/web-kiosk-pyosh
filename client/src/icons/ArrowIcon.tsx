import { COLOR } from "@constants/style";
import React from "react";

type ArrowIconPropsType = {
  width?: number;
  height?: number;
  color?: string;
  rotate?: number;
};

const ArrowIcon: React.FC<ArrowIconPropsType> = ({ width, height, color, rotate }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 16}
      height={height || 17}
      style={{ transform: `rotate(${rotate || 0}deg)` }}
      viewBox="0 0 16 17"
      fill="none"
    >
      <path
        d="M4 6.5L8 10.5L12 6.5"
        stroke={color || COLOR.offWhite}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowIcon;
