import ReactDOM from 'react-dom';

export function mount(appInstance, rootEl) {
  return ReactDOM.render(appInstance, rootEl);
}

// @ts-ignore
export function unmount(appInstance, rootEl) {
  return () => ReactDOM.unmountComponentAtNode(rootEl);
}
