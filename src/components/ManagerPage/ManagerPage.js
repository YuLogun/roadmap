import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Switch, Route } from 'react-router-dom';

//components
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

//styles
import { useStyles } from './ManagerPage.styles';
import EmployeeList from '../EmployeeList/EmployeeList';
import EmployeeRoadmap from '../EmployeeRoadmap/EmployeeRoadmap';
import PresetsList from '../PresetsList/PresetsList';
import { getDeveloperRoadmap } from '../../redux/reducer';
// import {  } from '@material-ui/core';

const ManagerPage = () => {
  const classes = useStyles();

  //redux hooks
  const courses = useSelector((state) => state.courses);
  const isAuthorized = useSelector(state => state.isAuthorized);
  const currentRoadmaps = useSelector(state => state.currentDeveloperRoadmaps);
  const dispatch = useDispatch();

  const [currentTab, setCurrentTab] = useState(0);

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={currentTab !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  const handleChangeTab = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const initRoadmaps = (username) => {
    // debugger;
    dispatch(getDeveloperRoadmap(username));
  }

  return isAuthorized ? (
    <div className={classes.managerPanelContainer}>
      <div className={classes.leftSideMenu}>
        <Tabs
            orientation="vertical"
            variant="scrollable"
            value={currentTab}
            onChange={handleChangeTab}
            aria-label="Vertical tabs example"
            className={classes.tabs}
        >
            <Tab
              label="Сотрудники"
              id="vertical-tab-0"
              aria-controls="vertical-tabpanel-0"
            />
            <Tab
              label="Роадмапы"
              id="vertical-tab-1"
              aria-controls="vertical-tabpanel-1"
            />
            <Tab
              label="Статистика"
              id="vertical-tab-2"
              aria-controls="vertical-tabpanel-2"
            />
        </Tabs>
      </div>

        <TabPanel value={currentTab} index={0} className={classes.tabPanelContainer}>
          {
            currentRoadmaps ? (
              <EmployeeRoadmap
                roadmapData={currentRoadmaps[0].preset}
                managerView
              />
            ) : (
              <EmployeeList currentUsername={(username) => initRoadmaps(username)}/>
            )
          }
        </TabPanel>
        <TabPanel value={currentTab} index={1} className={classes.tabPanelContainer}>
          <PresetsList />
        </TabPanel>
        <TabPanel value={currentTab} index={2} className={classes.tabPanelContainer}>
            Item Three
        </TabPanel>
    </div>
  ) : (
    <Redirect to="/auth" />
  )
};

export default ManagerPage;
