import { pathToRegexp } from "path-to-regexp";
import { html } from 'lit-element';
import { RouteObj } from "./redux/types";

export const defaultView = html`<home-view></home-view>`;
export const routes: RouteObj[] = (() => {
  return [
    {
      path: '/',
      name: 'home',
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
      isPublic: true,
      component: () => import('./views/signup-view'),
      view: html`<signup-view></signup-view>`,
    },
    {
      path: '/product/:id?',
      component: () => import('./views/product-view'),
      view: html`<product-view></product-view>`,
    },
  ].map(route => {
    const keys: any[] = [];
    const pathRegexp = pathToRegexp(route.path, keys);

    return {
      ...route,
      pathRegexp,
      keys,
    };
  });
})();