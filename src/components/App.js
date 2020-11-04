import React, {Component, Suspense} from "react";
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from 'react-router';
import {Navbar} from "./Nav";
import {Profile} from '../pages/profile';
import {Tasks} from '../pages/tasks';
import {AlertState} from "../context/alert/AlertState";
import {Alert} from "./Alert";
import {BackendState} from "../context/backend/BackendState";
import {FormState} from "../context/form/FormState";

class App extends Component {
  render() {
    return (
        <BackendState>
          <AlertState>
            <FormState>
              <BrowserRouter>
                <Navbar/>
                <div className="container pt-4">
                  <Alert/>
                  {/*<Suspense fallback={<div>Загрузка...</div>}>*/}
                    <Switch>
                      <Route path={'/'} exact component={Profile}/>
                      <Route path={'/tasks'} component={Tasks}/>
                    </Switch>
                  {/*</Suspense>*/}
                </div>
              </BrowserRouter>
            </FormState>
          </AlertState>
        </BackendState>
    );
  }
}

export default App;
