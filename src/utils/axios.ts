/*
 * @Author: xulibang
 * @Date: 2023-03-07 16:20:52
 * @LastEditors: xulibang
 * @LastEditTime: 2023-03-22 18:23:00
 * @FilePath: /corsair/src/utils/axios.ts
 * @Description:
 */
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const service = axios.create();

// Request interceptors
service.interceptors.request.use(
  (config: AxiosRequestConfig): any => {
    // do something
    return config;
  },
  (error: any) => {
    Promise.reject(error);
  },
);

// Response interceptors
service.interceptors.response.use(
  async (response: AxiosResponse): Promise<any> => {
    // do something
    return Promise.resolve(response);
  },
  (error: any) => {
    // do something
    //   if (!error.response) {
    //     Message.error('网络异常，请稍后重置')
    // } else {
    //     Message.error(error.response.data.message)
    // }
    return Promise.reject(error);
  },
);

export default service;
