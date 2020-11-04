import React from 'react';

export const TodoList = ({todos, user}) => {
  return (
    <ul className="list-group">
      {todos.map(todo => (
          <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
            <h5 className="mb-1">
              {todo.completed ? (<s>{todo.title}</s>) : todo.title}
            </h5>
            <small>
              {user.name}
            </small>
          </li>
      ))}
    </ul>
  );
};
