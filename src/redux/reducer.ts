import { AnyAction } from "redux";
import { State } from "./types";

import { defaultView } from '../routes';

const INITIAL_STATE: State = {
  currentView: defaultView,
  params: {},
  route: {},
  user: undefined,
  isLoading: true,
};


export const reducer = (state: State = INITIAL_STATE, action: AnyAction): State => {
  switch (action.type) {
    case 'UPDATE_PAGE':
      return {
        ...state,
        currentView: action.view,
        params: action.params,
        route: action.route,
      };
    case 'UPDATE_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'UPDATE_LOADING':
      return {
        ...state,
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};
