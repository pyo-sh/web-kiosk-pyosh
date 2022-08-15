export const ScreenQuery = {
  mobile: `(max-width: ${600}px)`,
  tablet: `(min-width: ${600}px)`,
};

export const MediaScreen = {
  Mobile: `@media only screen and ${ScreenQuery.mobile}`,
  Tablet: `@media only screen and ${ScreenQuery.tablet}`,
};
