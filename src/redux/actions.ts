import { routes } from "../routes";
import { GenericObject, RouteObj } from "./types";
export const UPDATE_PAGE = 'UPDATE_PAGE';


export const navigate = (location: { pathname: string; }) => (dispatch: any) => {
  const page = decodeURIComponent(location.pathname);
  dispatch(loadPage(page));
};

export const pushState = (page: string) => (dispatch: any) => {
  window.history.pushState({}, '', page);
  dispatch(navigate(window.location));
};

const loadPage = (path: string) => (dispatch: any) => {
  const results = routes.find((route: RouteObj): boolean => route.pathRegexp.test(path));
  if (!results) {
    // TODO: handle 404
    return;
  }

  // Load the component
  results.component();
  const params = {};

  if (results.keys?.length) {
    const matched = results.pathRegexp.exec(path) as string[];
    results.keys.reduce((output, key: GenericObject, index: number) => {
      output[key.name] = matched[index + 1];
      return output;
    }, params);
  }
  dispatch(updatePage({ view: results.view, params }));
};

const updatePage = ({ view, params }: GenericObject) => ({
  type: UPDATE_PAGE,
  view,
  params,
});



