interface IRuntime<T> {
  loadModule: (module: { default: T } | T) => void;
}

function loadRuntimeModules(runtime: IRuntime<Function>) {
  runtime.loadModule(
    require('/Users/zhanchao.wu/Documents/赛博星通/source/icestark-works/node_modules/build-plugin-app-core/lib/runtime.js')
  );

  runtime.loadModule(
    require('/Users/zhanchao.wu/Documents/赛博星通/source/icestark-works/node_modules/build-plugin-ice-router/lib/runtime.js')
  );

  runtime.loadModule(
    require('/Users/zhanchao.wu/Documents/赛博星通/source/icestark-works/node_modules/build-plugin-ice-logger/lib/runtime.js')
  );

  runtime.loadModule(
    require('/Users/zhanchao.wu/Documents/赛博星通/source/icestark-works/node_modules/build-plugin-ice-store/lib/runtime.js')
  );

  runtime.loadModule(
    require('/Users/zhanchao.wu/Documents/赛博星通/source/icestark-works/node_modules/build-plugin-ice-auth/lib/runtime.js')
  );

  runtime.loadModule(
    require('/Users/zhanchao.wu/Documents/赛博星通/source/icestark-works/node_modules/build-plugin-icestark/lib/runtime.js')
  );
}

export default loadRuntimeModules;
