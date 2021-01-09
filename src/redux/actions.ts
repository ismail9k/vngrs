import { TemplateResult } from "lit-element";
import { routes } from "../routes";
import { RouteObj } from "./types";
export const UPDATE_PAGE = 'UPDATE_PAGE';


export const navigate = (location: { pathname: string; }) => (dispatch: any) => {
  const page = decodeURIComponent(location.pathname);
  dispatch(loadPage(page));
};

export const pushState = (page: string) => (dispatch: any) => {
  window.history.pushState({}, '', page);
  dispatch(navigate(window.location));
};

const loadPage = (page: string) => (dispatch: any) => {
  const results = routes.find((route: RouteObj): boolean => route.pathRegexp.test(page));
  if (!results) {
    // TODO: handle 404
    return;
  }
  results.component();
  dispatch(updatePage(results.view));
};

const updatePage = (view: TemplateResult) => {
  return {
    type: UPDATE_PAGE,
    view
  };
};



