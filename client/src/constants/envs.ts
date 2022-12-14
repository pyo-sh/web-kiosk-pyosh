const {
  REACT_APP_SERVER_PROTOCOL,
  REACT_APP_SERVER_HOST,
  REACT_APP_SERVER_PORT,
  REACT_APP_SERVER_PREFIX,
} = process.env;

export const SERVER_PROTOCOL = REACT_APP_SERVER_PROTOCOL ?? "http";
export const SERVER_HOST = REACT_APP_SERVER_HOST;
export const SERVER_PORT = REACT_APP_SERVER_PORT ? `:${REACT_APP_SERVER_PORT}` : "";
export const SERVER_PREFIX = REACT_APP_SERVER_PREFIX ?? "";
export const SERVER_URL = `${SERVER_PROTOCOL}://${SERVER_HOST}${SERVER_PORT}${SERVER_PREFIX}`;
