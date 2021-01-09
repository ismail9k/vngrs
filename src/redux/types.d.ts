import { TemplateResult } from "lit-element";

interface State {
  currentView: TemplateResult;
  params?: GenericObject;
}

type GenericObject = {
  [key: string]: any;
};

type RouteObj = {
  path: string;
  component: () => {};
  pathRegexp: RegExp;
  view: TemplateResult;
  keys: any[];
};