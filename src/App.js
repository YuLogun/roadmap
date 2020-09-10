import React from "react";
import { Switch, Route } from "react-router-dom";

//components
import ManagerView from "./components/ManagerView/ManagerView";
import DeveloperView from "./components/DeveloperView/DeveloperView";
import AppBar from "./components/AppBar/AppBar";

//styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppBar />
      <Switch>
        <Route exact path="/">
          <ManagerView />
        </Route>
        <Route exact path="/roadmap">
          <DeveloperView />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
