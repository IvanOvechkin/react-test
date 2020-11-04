import {HIDE_FORM, SHOW_FORM} from "../types";

const handlers = {
  [SHOW_FORM]: (state) => ({...state, visible: true}),
  [HIDE_FORM]: (state) => ({...state, visible: false}),
  DEFAULT: state => state
};

export const formReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
