import axios from "axios";
import { API } from "../consts/consts";
import {
  getToken,
  removeToken,
  getAdminToken,
  removeAdminToken,
} from "./token";
const instance = axios.create({
  baseURL: process.env.API || API,
});

instance.interceptors.request.use((config) => {
  console.log("config", config.url);
  const token = getToken();
  const adminToken = getAdminToken();
  const isAdminRequest = config.url.includes("admin");

  if (isAdminRequest && adminToken) {
    config.headers.Authorization = `Bearer ${adminToken}`;
  } else if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.reponse) {
      if (error.response.status === 401 || error.response.status === 403) {
        console.error("Oh Oh, oopsi happened 401 or 403", error.response);
        removeToken();
        removeAdminToken();
      }
    }
    return error;
  }
);

instance.interceptors.request.use((request) => {
  console.log("baseURL", request.baseURL);
  return request;
});

export default instance;
