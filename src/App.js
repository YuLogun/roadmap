import React from "react";
import { Switch, Route } from "react-router-dom";
import EmployeeMetricsPage from './components/EmployeeMetricsPage/EmployeeMetricsPage';
import * as ROUTES from './constants/routes';

//components
import Authorization from './components/Authorization/Authorization';
import ManagerView from "./components/ManagerView/ManagerView";
import DeveloperView from "./components/DeveloperView/DeveloperView";
import AppBar from "./components/AppBar/AppBar";
import ManagerPage from './components/ManagerPage/ManagerPage';
import DeveloperPage from './components/DeveloperPage/DeveloperPage';
import Registartion from './components/Registration/Registration';
import RoadmapLineView from './components/RoadmapLineView/RoadmapLineView';
import AppHeader from './components/AppHeader/AppHeader';

//styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <ManagerPage />
          {/* <ManagerView /> */}
        </Route>
        <Route exact path={ROUTES.ROADMAP}>
          <DeveloperPage />
          {/* <DeveloperView /> */}
        </Route>
        <Route exact path={ROUTES.AUTH}>
          <Authorization />
        </Route>
        <Route exact path={ROUTES.REGISTRATION}>
          <Registartion />
        </Route>
        <Route exact path={ROUTES.TEST}>
          <RoadmapLineView />
        </Route>
        <Route exact path={ROUTES.EMPLOYEE_METRICS}>
          <EmployeeMetricsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
