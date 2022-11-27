import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { API_REFRESH_TOKEN } from "./api";
import Config from "./config";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./const";

const axiosInstance = axios.create({
  baseURL: Config.DOMAIN_SERVER_API,
  withCredentials: true,
  headers: {
    "Accept-Version": 1,
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
  },
});

const handleRefreshToken = async (refreshToken) => {
  const response = await axios.post(
    `${Config.DOMAIN_SERVER_API}${API_REFRESH_TOKEN}`,
    null,
    {
      headers: {
        "X-Refresh-Token": refreshToken,
      },
    }
  );
  const accessToken = response.data.data;
  _setHeader(accessToken);
};

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    // if (error.response?.status === 401) {
    //   console.log("401");
    //   return;
    //   if (!refreshToken) {
    //     console.log("forbidden resources");
    //     return;
    //   }
    // }
    // console.log(error.message);
    if (error.message == "Request failed with status code 401") {
      const refreshToken = await AsyncStorage.getItem(REFRESH_TOKEN);
      handleRefreshToken(refreshToken);
    }
    return Promise.reject(
      (error.response && error.response?.data) || "Something went wrong"
    );
  }
);

export const _setHeader = (accessToken) => {
  axiosInstance.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  });
};

export const _getApi = (url, data) =>
  axiosInstance.get(url, data).then((response) => response.data);

export const _postApi = (url, data, headers = {}) =>
  axiosInstance.post(url, data, headers).then((response) => response.data);

export const _putApi = (url, data) =>
  axiosInstance.put(url, data).then((response) => response.data);

export const _patchApi = (url, data) =>
  axiosInstance.patch(url, data).then((response) => response.data);

export const _deleteApi = (url) =>
  axiosInstance.delete(url).then((response) => response.data);

export const _uploadApi = (url, data) =>
  axiosInstance
    .post(url, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => response.data);

export default axiosInstance;
