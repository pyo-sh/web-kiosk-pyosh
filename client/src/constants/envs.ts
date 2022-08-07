export const SERVER_HOST = process.env.REACT_APP_SERVER_HOST;
export const SERVER_PORT = process.env.REACT_APP_SERVER_PORT;
export const SERVER_URL = `${SERVER_HOST}${SERVER_PORT ? `:SERVER_PORT` : ""}`;
