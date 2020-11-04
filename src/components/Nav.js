import React, {useContext, useEffect, Fragment} from 'react';
import {NavLink} from "react-router-dom";
import {BackendContext} from "../context/backend/backendContext";

export const Navbar = () => {

  const {currentUser, getUser} = useContext(BackendContext);
  useEffect(() => {
    if(!window.__DATA__?.user) {
      getUser({id: 2});
    }
  }, []);

  return (
      <Fragment>
        {currentUser &&
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/" exact>Все задачи</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/tasks">Мои задачи</NavLink>
                </li>
              </ul>
              <span className="navbar-text">{currentUser.name}</span>
            </div>
          </nav>
        }
      </Fragment>
)};
