import { AnyAction } from "redux";
import { State } from "./types";

import { defaultView } from '../routes';

const INITIAL_STATE: State = {
  currentView: defaultView,
  params: {},
};


export const reducer = (state: State = INITIAL_STATE, action: AnyAction): State => {
  switch (action.type) {
    case 'UPDATE_PAGE':
      return {
        ...state,
        currentView: action.view,
        params: action.params,
      };
    default:
      return state;
  }
};
