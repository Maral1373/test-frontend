import axios from "axios";
import { API } from "../consts/consts";
import { getToken } from "./token";
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

export default instance;
