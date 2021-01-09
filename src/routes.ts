import { pathToRegexp } from "path-to-regexp";
import { html } from 'lit-element';
import { RouteObj } from "./redux/types";

export const routes: RouteObj[] = (() => {
  return [
    {
      path: '/',
      component: () => import('./views/home-view'),
      view: html`<home-view></home-view>`,
    },
    {
      path: '/home',
      component: () => import('./views/home-view'),
      view: html`<home-view></home-view>`,
    },
    {
      path: '/signup',
      component: () => import('./views/signup-view'),
      view: html`<signup-view></signup-view>`,
    },
    {
      path: '/product/:id?',
      component: () => import('./views/product-view'),
      view: html`<product-view></product-view>`,
    },
  ].map(route => ({
    ...route,
    pathRegexp: pathToRegexp(route.path),
  }));
})();