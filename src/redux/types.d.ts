import { TemplateResult } from "lit-element";

interface State {
  currentView: TemplateResult;
  route: Partial<RouteObj>;
  params: GenericObject;
  user: GenericObject | undefined | null;
  isLoading: boolean;
  view?: TemplateResult;
}

type GenericObject = {
  [key: string]: any;
};

type RouteObj = {
  path: string;
  component: () => {};
  pathRegexp: RegExp;
  isPublic?: boolean;
  view: TemplateResult;
  keys: any[];
};