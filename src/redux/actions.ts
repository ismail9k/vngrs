import { routes } from "../routes";
import { GenericObject, RouteObj, State } from "./types";
export const UPDATE_PAGE = 'UPDATE_PAGE';
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_LOADING = 'UPDATE_LOADING';


export const navigate = (location: { pathname: string; }) => (dispatch: any) => {
  const page = decodeURIComponent(location.pathname);
  dispatch(loadPage(page));
};

export const pushState = (page: string) => (dispatch: any) => {
  window.history.pushState({}, '', page);
  dispatch(navigate(window.location));
};

export const updateUser = ({ user }: Partial<State>) => ({
  type: UPDATE_USER,
  user,
});
export const updateLoading = ({ isLoading }: Partial<State>) => ({
  type: UPDATE_LOADING,
  isLoading,
});

const loadPage = (path: string) => (dispatch: any) => {
  const route = routes.find((route: RouteObj): boolean => route.pathRegexp.test(path));
  if (!route) {
    // TODO: handle 404
    return;
  }

  // Load the component
  route.component();
  const params = {};

  if (route.keys?.length) {
    const matched = route.pathRegexp.exec(path) as string[];
    route.keys.reduce((output, key: GenericObject, index: number) => {
      output[key.name] = matched[index + 1];
      return output;
    }, params);
  }
  dispatch(_updatePage({ view: route.view, params, route }));
};

const _updatePage = ({ view, params, route }: Partial<State>) => ({
  type: UPDATE_PAGE,
  view,
  params,
  route,
});



