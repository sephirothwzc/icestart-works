import { createElement, useEffect, Component } from 'react';
import {
  isMiniApp,
  isWeChatMiniProgram,
  isByteDanceMicroApp,
  isBaiduSmartProgram,
  isKuaiShouMiniProgram,
  isWeb,
} from 'universal-env';
import miniappRenderer from 'miniapp-renderer';
import createShareAPI, { history } from 'create-app-shared';
import { IAppConfig, IBuildConfig } from './types';

import reactAppRenderer, { getInitialData } from 'react-app-renderer';
import { withRouter as defaultWithRouter } from 'react-router';
import genWithSearchParams from './genWithSearchParams';

// eslint-disable-next-line
import '../src/global.scss';

import loadRuntimeModules from './loadRuntimeModules';
import loadStaticModules from './loadStaticModules';
import defaultStaticConfig from './staticConfig';

import { setAppConfig } from './appConfig';
import { mount, unmount } from './render';
import ErrorBoundary from './ErrorBoundary';

const buildConfig: IBuildConfig = { icestarkUMD: false };
const {
  createBaseApp,
  withRouter,
  createHistory,
  getHistory,
  emitLifeCycles,
  usePageShow,
  usePageHide,
  withPageLifeCycle,
  pathRedirect,
  registerNativeEventListeners,
  addNativeEventListener,
  removeNativeEventListener,
  getSearchParams,
} = createShareAPI(
  {
    createElement,
    useEffect,
    withRouter: defaultWithRouter,
    initHistory: buildConfig.router !== false,
  },
  loadRuntimeModules
);

export function runApp(appConfig?: IAppConfig, staticConfig?: any) {
  let renderer;

  if (
    (isMiniApp ||
      isWeChatMiniProgram ||
      isByteDanceMicroApp ||
      isBaiduSmartProgram ||
      isKuaiShouMiniProgram) &&
    !isWeb
  ) {
    renderer = miniappRenderer;
  } else {
    renderer = reactAppRenderer;
  }

  renderer(
    {
      appConfig,
      staticConfig: staticConfig || defaultStaticConfig,
      buildConfig,
      setAppConfig,
      createBaseApp,
      createHistory,
      getHistory,
      emitLifeCycles,
      pathRedirect,
      loadStaticModules,
      ErrorBoundary,
    },
    {
      createElement,
      mount,
      unmount,
      Component,
    }
  );
}

export function createApp(appConfig, staticConfig?: any) {
  console.warn(
    'Detected that you are using createApp, please use runApp method, Visit https://ice.work/docs/guide/basic/api.'
  );
  runApp(appConfig, staticConfig);
}

const useSearchParams = () => {
  // @deprecated
  console.warn(
    'Detected that you are using useSearchParams, please use getSearchParams method, Visit https://ice.work/docs/guide/basic/api.'
  );
  return getSearchParams();
};
const withSearchParams = genWithSearchParams(getSearchParams);

// Public API
export {
  // router api
  withRouter,
  history,
  getHistory,
  getSearchParams,
  useSearchParams,
  withSearchParams,
  getInitialData,
  // LifeCycles api
  usePageShow,
  usePageHide,
  withPageLifeCycle,
  // events api
  registerNativeEventListeners,
  addNativeEventListener,
  removeNativeEventListener,
  ErrorBoundary,
};

// Private API
export default {
  createBaseApp,
  emitLifeCycles,
};
