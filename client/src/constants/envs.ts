export const SERVER_PROTOCOL = process.env.REACT_APP_SERVER_PROTOCOL;
export const SERVER_HOST = process.env.REACT_APP_SERVER_HOST;
export const SERVER_PORT = process.env.REACT_APP_SERVER_PORT;
export const SERVER_URL = `${SERVER_PROTOCOL ? SERVER_PROTOCOL : "http"}://${SERVER_HOST}${
  SERVER_PORT ? `:${SERVER_PORT}` : ""
}`;
