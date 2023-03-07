/*
 * @Author: xulibang
 * @Date: 2023-03-07 16:26:19
 * @LastEditors: xulibang
 * @LastEditTime: 2023-03-07 17:48:35
 * @FilePath: /corsair/src/api/module/login.ts
 * @Description:
 */
import request from '@/utils/axios';

/**
 * 登录
 */

interface IResponseType<P = object> {
  code?: number;
  status: number;
  msg: string;
  data: P;
}
interface ILogin {
  token: string;
  expires: number;
}
export const login = (username: string, password: string) => {
  return request<IResponseType<ILogin>>({
    url: '/api/auth/login',
    method: 'post',
    data: {
      username,
      password,
    },
  });
};
