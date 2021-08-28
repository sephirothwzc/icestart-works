import { createElement } from 'react';

export default (getSearchParams) => {
  const withSearchParams = (Component) => {
    // @deprecated
    console.warn(
      'Detected that you are using useSearchParams, please use getSearchParams method, Visit https://ice.work/docs/guide/basic/api.'
    );
    const WrapperedSearchParams = (props) => {
      const searchParams = getSearchParams();
      return createElement(Component, {
        ...props,
        searchParams,
      });
    };
    return WrapperedSearchParams;
  };
  return withSearchParams;
};
