import axios from "axios";
import { API } from "../consts/consts";
import { getToken, removeToken } from "./token";
const instance = axios.create({
  baseURL: process.env.API || API,
});

instance.interceptors.request.use((config) => {
  const token = getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401 || error.response.status === 403) {
      removeToken();
    }
  }
);

export default instance;
