import {CHANGE_USER_DATA, FETCH_ALL_TODOS, FETCH_USER_TODOS, GET_USER, HIDE_LOADER, SHOW_LOADER} from "../types";

const handlers = {
  [SHOW_LOADER]: state => ({...state, loading: true}),
  [HIDE_LOADER]: state => ({...state, loading: false}),
  [GET_USER]: (state, {payload}) => ({...state, currentUser: payload}),
  [CHANGE_USER_DATA]: (state, {payload}) => ({...state, currentUser: payload}),
  [FETCH_USER_TODOS]: (state, {payload}) => ({...state, userTodos: payload}),
  [FETCH_ALL_TODOS]: (state, {payload}) => ({...state, allTodos: payload}),
  DEFAULT: state => state
};

export const backendReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT;
  return handle(state, action);
};
