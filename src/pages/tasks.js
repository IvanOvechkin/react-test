import React, {useContext, useEffect} from "react";
import {BackendContext} from "../context/backend/backendContext";
import {Loader} from "../components/Loader";
import {TodoList} from "../components/TodoList";

export const Tasks = () => {

  const {loading, currentUser, userTodos, fetchUserTodos} = useContext(BackendContext);

  useEffect(() => {
    fetchUserTodos()
  }, []);

  return (
      <div className="container">
        <h2>Все задачи</h2>
        {loading ? <Loader/> : <TodoList todos={userTodos} user={currentUser}/>}
      </div>
  );
};
