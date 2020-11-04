import React, {useContext, useState, useEffect} from "react";
import {BackendContext} from "../context/backend/backendContext";
import {Loader} from "../components/Loader";
import {TodoList} from "../components/TodoList";
import {Form} from "../components/Form";
import {FormContext} from "../context/form/formContext";

export const Profile = () => {

  const {loading, currentUser, allTodos, fetchAllTodos} = useContext(BackendContext);
  const {toogleVisible, formVisible} = useContext(FormContext);
  useEffect(() => {
    fetchAllTodos();
  }, []);

  return (
    <div className="container">
      {currentUser && <h2>Задачи {currentUser.name}</h2>}
      {currentUser &&
        <div className="row">
          <div className="col-md-4">
            <p>{currentUser.name}</p>
            <p>{currentUser.phone}</p>
            <p>{currentUser.email}</p>
            <p><a href="#">{currentUser.website}</a></p>
            <p>
              <button type="button" className="btn btn-primary" onClick={toogleVisible}>Редактировать</button>
            </p>
            {formVisible && (<Form user={currentUser}/>)}
          </div>
          <div className="col-md-8">{loading ? <Loader/> : <TodoList todos={allTodos} user={currentUser}/>}</div>
        </div>
      }
    </div>
  )
};
