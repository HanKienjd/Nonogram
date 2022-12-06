import axios from "axios";
import queryString from "query-string";
import Config from "react-native-config";

const axiosClient = axios.create({
  baseURL: Config.API_URL || "http://10.0.3.1:3000",
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(
  (config) => {
    // const token = cookieUtils.getCookie("token-id");

    // if (token) {
    //   config.headers.common["token-id"] = token;
    // }
    return config;
  },
  (error) => {
    throw error;
  },
);

axiosClient.interceptors.response.use(
  (response) => {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response.data);
    }

    return Promise.reject(new Error("Lỗi khi kết nối tới server! "));
  },
  async (error) => {
    console.log(error);
    throw error;
  },
);

export default axiosClient;
