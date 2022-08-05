export type RouterStateType = {
  pathname: string;
  path: string;
};

export const pathnameToPath = (pathname: string) => {
  const paths = pathname.split("/");
  return `/${paths[1] || ""}`;
};

const { pathname } = window.location;
export const defaultState: RouterStateType = {
  pathname,
  path: pathnameToPath(pathname),
};
