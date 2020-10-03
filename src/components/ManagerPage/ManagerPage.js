import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Switch, Route } from 'react-router-dom';

//components
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import RoadmapLineView from '../RoadmapLineView/RoadmapLineView';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

//styles
import { useStyles } from './ManagerPage.styles';
import EmployeeList from '../EmployeeList/EmployeeList';
import EmployeeRoadmap from '../EmployeeRoadmap/EmployeeRoadmap';
import PresetsList from '../PresetsList/PresetsList';
import { getDeveloperRoadmap, unsetRoadmaps } from '../../redux/reducer';
import { clearUserData } from '../../services/Authorization.service'
// import {  } from '@material-ui/core';

const ManagerPage = () => {
  const classes = useStyles();

  //redux hooks
  const courses = useSelector((state) => state.courses);
  const isAuthorized = useSelector(state => state.isAuthorized);
  const currentRoadmaps = useSelector(state => state.currentDeveloperRoadmaps);
  const dispatch = useDispatch();

  const [currentTab, setCurrentTab] = useState(0);
  const [currentUsername, setCurrentUsername] = useState('');

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
    setCurrentUsername(username)
    dispatch(getDeveloperRoadmap(username));
  }

  const backToEmployeeListHandler = () => {
    setCurrentUsername('')
    dispatch(unsetRoadmaps());
    // debugger;
  }

  const logoutHandler = () => {
    clearUserData();
    document.location.reload();
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
              label={<a href="https://docs.google.com/forms/d/e/1FAIpQLSdKsIRr30pSPVxjyUv-ZpXmty2TPQ7EOqq3hTdAaq5pEchkUw/viewform?usp=send_form">Отзыв</a>}
              id="vertical-tab-2"
              aria-controls="vertical-tabpanel-2"
              // onClick={}
            />
        </Tabs>
        <div 
          className={classes.exitBlock}
          onClick={logoutHandler}
        >
          <span className={classes.exitTitle}>Выход</span>
        </div>
      </div>

        <TabPanel value={currentTab} index={0} className={classes.tabPanelContainer}>
          {
            currentRoadmaps ? (
              <div>
                <div className={classes.roadmapHeader}>
                  <ArrowBackIosIcon 
                    onClick={backToEmployeeListHandler}
                    className={classes.backArrow}
                  />
                  <div className={classes.roadmapTitleBlock}>
                    <span className={classes.roadmapTitle}>Roadmap for {currentUsername}</span>
                  </div>
                </div>
                <RoadmapLineView 
                  currentRoadmap={currentRoadmaps[0]}
                />
              </div>
              
              // <EmployeeRoadmap
              //   roadmapData={currentRoadmaps[0].preset}
              //   managerView
              // />
            ) : (
              <EmployeeList currentUsername={(username) => initRoadmaps(username)}/>
            )
          }
        </TabPanel>
        <TabPanel value={currentTab} index={1} className={classes.tabPanelContainer}>
          <PresetsList />
        </TabPanel>
        {/* <TabPanel value={currentTab} index={2} className={classes.tabPanelContainer}>
            Item Three
        </TabPanel> */}
    </div>
  ) : (
    <Redirect to="/auth" />
  )
};

export default ManagerPage;
