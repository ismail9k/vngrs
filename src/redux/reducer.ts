import { AnyAction } from "redux";

const INITIAL_STATE: State = {
  currentView: "home-view"
};


export const reducer = (state: State = INITIAL_STATE, action: AnyAction): State => {
  switch (action.type) {
    case 'UPDATE_PAGE':
      return {
        ...state,
        currentView: action.page,
      };
    default:
      return state;
  }
};
