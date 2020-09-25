import React from "react";
import { Switch, Route } from "react-router-dom";

//components
import Authorization from './components/Authorization/Authorization';
import ManagerView from "./components/ManagerView/ManagerView";
import DeveloperView from "./components/DeveloperView/DeveloperView";
import AppBar from "./components/AppBar/AppBar";
import ManagerPage from './components/ManagerPage/ManagerPage';

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
          <DeveloperView />
        </Route>
        <Route exact path="/auth">
          <Authorization/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
