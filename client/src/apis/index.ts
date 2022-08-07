import { SERVER_URL } from "@constants/envs";
import axios, { AxiosResponse } from "axios";

function initAxios() {
  axios.defaults.baseURL = SERVER_URL;
  axios.interceptors.response.use(
    (res: AxiosResponse<any, any>) => res,
    async (error) => {
      // TODO : Error Handler
      return Promise.reject(error);
    },
  );
}

export default initAxios;
