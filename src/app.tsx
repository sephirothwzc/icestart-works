import { runApp, IAppConfig, config } from 'ice';
import { ConfigProvider, Message } from '@alifd/next';
import PageLoading from '@/components/PageLoading';
import FrameworkLayout from '@/layouts/FrameworkLayout';

const appConfig: IAppConfig = {
  app: {
    rootId: 'icestark-container',
    addProvider: ({ children }) => <ConfigProvider prefix="next-icestark-">{children}</ConfigProvider>,
  },
  router: {
    type: 'browser',
  },
  icestark: {
    type: 'framework',
    Layout: FrameworkLayout,
    getApps: async () => {
      const apps = [
        {
          path: '/seller',
          title: '商家平台',
          sandbox: true,
          // React app demo: https://github.com/alibaba-fusion/materials/tree/master/scaffolds/ice-stark-child
          // url: [
          //   'https://iceworks.oss-cn-hangzhou.aliyuncs.com/icestark/child-seller-react/build/js/index.js',
          //   'https://iceworks.oss-cn-hangzhou.aliyuncs.com/icestark/child-seller-react/build/css/index.css',
          // ],
          url: ['//localhost:3334/js/index.js', '//localhost:3334/css/index.css'],
        },
        {
          path: '/waiter',
          title: '小二平台',
          sandbox: true,
          url: [
            // Vue app demo: https://github.com/ice-lab/vue-materials/tree/master/scaffolds/icestark-child-app
            'https://iceworks.oss-cn-hangzhou.aliyuncs.com/icestark/child-waiter-vue/dist/js/app.js',
            'https://iceworks.oss-cn-hangzhou.aliyuncs.com/icestark/child-waiter-vue/dist/css/app.css',
          ],
        },
        {
          path: '/angular',
          title: 'Angular',
          sandbox: true,
          // Angular app demo: https://github.com/ice-lab/icestark-child-apps/tree/master/child-common-angular
          entry: 'https://iceworks.oss-cn-hangzhou.aliyuncs.com/icestark/child-common-angular/index.html',
        },
      ];
      return apps;
    },
    appRouter: {
      LoadingComponent: PageLoading,
    },
  },
  request: {
    baseURL: config.baseURL,
    // 拦截器
    interceptors: {
      request: {
        onConfig: (req) => {
          // 发送请求前：可以对 RequestConfig 做一些统一处理
          req.headers = { 'app-name': config.appName };
          return req;
        },
        onError: (error) => {
          return Promise.reject(error);
        },
      },
      response: {
        onConfig: (result) => {
          // 请求成功：可以做全局的 toast 展示，或者对 response 做一些格式化
          if (result.status !== 200) {
            Message.error(result.data);
          }
          return result;
        },
        onError: (error) => {
          // 请求出错：服务端返回错误状态码
          // console.log(error.response.data);
          // console.log(error.response.status);
          // console.log(error.response.headers);
          Message.error(error.response?.data);
          return Promise.reject(error);
        },
      },
    },
  },
};

runApp(appConfig);
