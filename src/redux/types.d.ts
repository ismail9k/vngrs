import { TemplateResult } from "lit-element";

interface State {
  currentView: string;
}

type GenericObject = {
  [key: string]: any;
};

type RouteObj = {
  path: string;
  component: () => {};
  pathRegexp: RegExp;
  view: TemplateResult;
};