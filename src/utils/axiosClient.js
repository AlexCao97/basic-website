import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
  headers: {
    "Access-Control-Allow-Private-Network": true,
    "Content-Security-Policy": "upgrade-insecure-requests",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    Expires: "0",
    "Content-Type": "application/x-www-form-urlencoded",
  },
  paramsSerializer: (params) => {
    // Tùy chỉnh chuyển đổi params thành chuỗi URL
    return Object.keys(params)
      .map((key) => {
        // Xử lý các phần tử của mảng riêng lẻ
        if (Array.isArray(params[key])) {
          return params[key]
            .map(
              (val) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`
            )
            .join("&");
        }
        // Xử lý các trường hợp khác
        return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
      })
      .join("&");
  },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  async (config) => {
    // const token = await getData("token");
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }

    // Do something before request is sent
    console.log(`Request ${config.url} >>>>>>>>>>>>>`, {
      params: config.data,
      config,
    });
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // console.log('response', {
    //   URL: response.request.responseURL,
    //   data: response.data,
    //   response,
    // });
    console.log(
      `>>>>>>> Response>>>>>> : ${response.request.responseURL}`,
      response
    );

    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosClient;
