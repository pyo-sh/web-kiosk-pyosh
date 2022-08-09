export const ScreenQuery = {
  mobile: `(max-width: ${679}px)`,
  tablet: `(min-width: ${680}px)`,
};

export const MediaScreen = {
  Mobile: `@media only screen and ${ScreenQuery.mobile}`,
  Tablet: `@media only screen and ${ScreenQuery.tablet}`,
};
