export const ROTATE_45 = `
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
`;

export const ROTATE_X45 = `
  -webkit-transform: rotateX(45deg);
  transform: rotateX(45deg);
`;

export const ROTATE_Y45 = `
  -webkit-transform: rotateY(45deg);
  transform: rotateY(45deg);
`;

export const ROTATE_45R = `
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
`;

export const ROTATE_X45R = `
  -webkit-transform: rotateX(-45deg);
  transform: rotateX(-45deg);
`;

export const ROTATE_Y45R = `
  -webkit-transform: rotateY(-45deg);
  transform: rotateY(-45deg);
`;

export const SKEW_X45 = `
  -webkit-transform: skewX(45deg);
  transform: skewX(45deg);
`;

export const SKEW_Y45 = `
  -webkit-transform: skewY(45deg);
  transform: skewY(45deg);
`;

export const PERSPECTIVE_100 = `
  -webkit-perspective: 100px;
  perspective: 100px;
`;

export const PERSPECTIVE_200 = `
  -webkit-perspective: 200px;
  perspective: 200px;
`;

export const TRANSFORM_ORIGIN_10000 = `
  -webkit-transform-origin: 100% 0 0;
  transform-origin: 100% 0 0;
`;

export const TRANSFORM_ORIGIN_01000 = `
  -webkit-transform-origin: 0 100% 0;
  transform-origin: 0 100% 0;
`;

export const TRANSFORM_MAIN_ARRAY = [
  ROTATE_45,
  ROTATE_X45,
  ROTATE_Y45,
  ROTATE_45R,
  ROTATE_X45R,
  ROTATE_Y45R,
  SKEW_X45,
  SKEW_Y45,
];

export const TRANSFORM_SUB_ARRAY = [
  "",
  PERSPECTIVE_200,
  PERSPECTIVE_100,
  TRANSFORM_ORIGIN_10000,
  TRANSFORM_ORIGIN_01000,
];
