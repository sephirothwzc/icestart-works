import { request } from 'ice';

export interface LoginOut {
  id: string;
  token: string;
  userName: string;
}

export default {
  /**
   * 登陆
   * @param userName 用户名
   * @param password 密码
   * @returns
   */
  async login(userName: string, password: string): Promise<LoginOut> {
    return await request.post('/api/app-user/login', { userName, password });
    // return await request({ url: '/api/app-user/login', data: { userName, password }, method: 'post' });
    // return await request('/api/app-user/login', {
    //   method: 'POST',
    //   data: {
    //     userName,
    //     password,
    //   },
    // });
  },
};
