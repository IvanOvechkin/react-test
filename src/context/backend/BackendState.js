import React, {useReducer} from 'react';
import {BackendContext} from './backendContext';
import {backendReducer} from "./backendReducer";
import axios from 'axios';
import {CHANGE_USER_DATA, FETCH_ALL_TODOS, FETCH_USER_TODOS, GET_USER, HIDE_LOADER, SHOW_LOADER} from "../types";

const url = 'https://jsonplaceholder.typicode.com';


export const BackendState = ({children}) => {

  const initialState = {
    currentUser: window.__DATA__?.user || null,
    userTodos: [],
    allTodos: window.__DATA__?.user?.todos || [],
    loading: false
  };

  const [state, dispatch] = useReducer(backendReducer, initialState);

  const showLoader = () => dispatch({type: SHOW_LOADER});
  const hideLoader = () => dispatch({type: HIDE_LOADER});

  const fetchAllTodos = async () => {
    showLoader();
    if (!state.allTodos.length) {
      const res = await axios.get(`${url}/todos`);
      dispatch({
        type: FETCH_ALL_TODOS,
        payload: res.data
      });
    }
    hideLoader();
  };

  const fetchUserTodos = async () => {
    const apiParams = {
      params: {
        userId: state.currentUser.id
      }
    };
    showLoader();
    const res = await axios.get(`${url}/todos`, apiParams);
    dispatch({
      type: FETCH_USER_TODOS,
      payload: res.data
    });
    hideLoader();
  };

  const getUser = async (params) => {
    const apiParams = {
      params: {
        id: params.id
      }
    };
    showLoader();
    const res = await axios.get(`${url}/users`, apiParams);
    dispatch({
      type: GET_USER,
      payload: res.data[0]
    });
    if (window.__DATA__?.user) {
      window.__DATA__ = {
        user: res.data[0]
      }
    }
    hideLoader();
  };

  const changeUserData = (newData) => {
    dispatch({
      type: CHANGE_USER_DATA,
      payload: {
        ...state.currentUser,
        ...newData
      }
    });
  };

  return (
      <BackendContext.Provider value={{
        showLoader, getUser, changeUserData, fetchUserTodos, fetchAllTodos,
        currentUser: state.currentUser,
        loading: state.loading,
        userTodos: state.userTodos,
        allTodos: state.allTodos
      }}>
        {children}
      </BackendContext.Provider>
  );
};
