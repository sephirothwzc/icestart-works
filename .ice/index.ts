export * from './router';
import helpers from './helpers';
import logger from './logger';
import { config, APP_MODE } from './config';
import request from './request/request';
import useRequest from './request/useRequest';
import { Helmet } from 'react-helmet';
import { createStore } from '@ice/store';
import store from './store/index';
export * from './auth';

export {
  helpers,
  logger,
  config,
  APP_MODE,
  request,
  useRequest,
  Helmet as Head,
  // @deprecated
  Helmet,
  createStore,
  store,
};

export * from './runApp';
export { lazy } from './lazy';
export * from './types';
