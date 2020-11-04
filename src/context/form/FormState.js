import React, {useReducer} from 'react';
import {FormContext} from "./formContext";
import {formReducer} from "./formReducer";
import {HIDE_FORM, SHOW_FORM} from "../types";

export const FormState = ({children}) => {

  const [state, dispatch] = useReducer(formReducer, {visible: false});

  const show = () => dispatch({type: SHOW_FORM});
  const hide = () => dispatch({type: HIDE_FORM});

  const toogleVisible = () => {
    if (state.visible) {
      hide()
    } else {
      show();
    }
  };

  return (
      <FormContext.Provider value={{
        toogleVisible,
        formVisible: state.visible
      }}>
        {children}
      </FormContext.Provider>
  );
};
