import React from "react";
import { Switch, Route } from "react-router-dom";

//components
import ManagerView from "./components/ManagerView";
import DeveloperView from "./components/DeveloperView";

//styles
import "./App.css";

function App() {
  return (
    <div className="App">
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
