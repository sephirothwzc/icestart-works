import { IAppConfig } from './types';

function loadStaticModules(appConfig: IAppConfig) {
  require('/Users/zhanchao.wu/Documents/赛博星通/source/icestark-works/node_modules/build-plugin-ice-request/lib/runtime.js').default(
    { appConfig }
  );
}

export default loadStaticModules;
