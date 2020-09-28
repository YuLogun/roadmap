import React from "react";
import { Switch, Route } from "react-router-dom";

//components
import Authorization from './components/Authorization/Authorization';
import ManagerView from "./components/ManagerView/ManagerView";
import DeveloperView from "./components/DeveloperView/DeveloperView";
import AppBar from "./components/AppBar/AppBar";
import ManagerPage from './components/ManagerPage/ManagerPage';
import DeveloperPage from './components/DeveloperPage/DeveloperPage';
import Registartion from './components/Registration/Registration';

//styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <ManagerPage />
          {/* <ManagerView /> */}
        </Route>
        <Route exact path="/roadmap">
          {/* <DeveloperPage /> */}
          <DeveloperView />
        </Route>
        <Route exact path="/auth">
          <Authorization />
        </Route>
        <Route exact path="/reg">
          <Registartion />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
