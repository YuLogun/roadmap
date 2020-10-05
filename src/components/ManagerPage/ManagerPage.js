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
import PhoneIcon from '@material-ui/icons/Phone';

//styles
import { useStyles } from './ManagerPage.styles';
import EmployeeList from '../EmployeeList/EmployeeList';
import EmployeeRoadmap from '../EmployeeRoadmap/EmployeeRoadmap';
import PresetsList from '../PresetsList/PresetsList';
import { getDeveloperRoadmap, unsetRoadmaps } from '../../redux/reducer';

import './ManagerPage.styles.scss';
import { clearUserData } from '../../services/Authorization.service'
import { GOOGLE_FORMS_COMMENT_LINK } from '../../constants/commonLinks';
import ManagerMetrics from '../ManagerMetrics/ManagerMetrics';
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

  const employeeLabelContent = () => {
    return (
      <div className="tabItem">
        <svg className="leftSideMenuTabIcon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.0917 13.2319C15.1167 13.2319 17.6833 9.35996 17.6833 6.36797C17.6833 3.37599 15.1167 1 12.0917 1C8.975 1 6.5 3.37599 6.5 6.36797C6.5 9.35996 8.975 13.2319 12.0917 13.2319Z" stroke="url(#paint0_linear)" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14.75 12.4399L16.5833 15.0799C19.6083 15.0799 22.0833 17.4559 22.0833 20.3599L23 22.9999H1L1.91667 20.3599C1.91667 17.4559 4.39167 15.0799 7.41667 15.0799L9.25 12.4399" stroke="url(#paint1_linear)" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M7.4165 15.0801C10.4415 17.4561 13.5582 17.4561 16.5832 15.0801" stroke="url(#paint2_linear)" stroke-linecap="round" stroke-linejoin="round"/>
          <defs>
          <linearGradient id="paint0_linear" x1="12.0917" y1="1" x2="12.0917" y2="16.0231" gradientUnits="userSpaceOnUse">
          <stop stop-color="#00E0FF"/>
          <stop offset="1" stop-color="#0047FF"/>
          </linearGradient>
          <linearGradient id="paint1_linear" x1="12" y1="12.4399" x2="12" y2="25.4095" gradientUnits="userSpaceOnUse">
          <stop stop-color="#00E0FF"/>
          <stop offset="1" stop-color="#0047FF"/>
          </linearGradient>
          <linearGradient id="paint2_linear" x1="11.9998" y1="15.0801" x2="11.9998" y2="17.2687" gradientUnits="userSpaceOnUse">
          <stop stop-color="#00E0FF"/>
          <stop offset="1" stop-color="#0047FF"/>
          </linearGradient>
          </defs>
        </svg>
        <span className="lefSideMenuTabTitle">Сотрудники</span>
      </div>
    )
  }

  const roadmapsLabelContent = () => {
    return (
      <div className="tabItem">
        <svg className="leftSideMenuTabIcon" width="24" height="24" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.21887 16.875C3.30561 16.895 2.43753 17.2763 1.8049 17.9353C1.17227 18.5943 0.826682 19.4772 0.843874 20.3905C0.843874 23.217 3.80965 25.9327 3.93579 26.0466C4.01337 26.1168 4.11425 26.1556 4.21887 26.1556C4.32349 26.1556 4.42438 26.1168 4.50195 26.0466C4.62809 25.9327 7.59387 23.217 7.59387 20.3905C7.61106 19.4772 7.26547 18.5943 6.63284 17.9353C6.00021 17.2763 5.13214 16.895 4.21887 16.875ZM4.21887 25.1438C3.50464 24.4169 1.68762 22.3729 1.68762 20.3896C1.67049 19.7002 1.92723 19.032 2.40164 18.5314C2.87605 18.0308 3.52948 17.7386 4.21887 17.7188C4.90841 17.7386 5.56197 18.031 6.03641 18.5317C6.51085 19.0325 6.76749 19.7009 6.75012 20.3905C6.75012 22.3695 4.93268 24.4169 4.21887 25.1438Z" fill="url(#paint0_linear)"/>
          <path d="M4.21875 18.5625C3.885 18.5625 3.55873 18.6615 3.28123 18.8469C3.00372 19.0323 2.78743 19.2959 2.6597 19.6042C2.53198 19.9126 2.49856 20.2519 2.56368 20.5792C2.62879 20.9066 2.78951 21.2072 3.02551 21.4432C3.26151 21.6792 3.56219 21.84 3.88954 21.9051C4.21688 21.9702 4.55618 21.9368 4.86453 21.8091C5.17288 21.6813 5.43643 21.465 5.62186 21.1875C5.80728 20.91 5.90625 20.5838 5.90625 20.25C5.90625 19.8024 5.72846 19.3732 5.41199 19.0568C5.09553 18.7403 4.6663 18.5625 4.21875 18.5625ZM4.21875 21.0938C4.05187 21.0938 3.88874 21.0443 3.74999 20.9516C3.61123 20.8588 3.50309 20.7271 3.43923 20.5729C3.37537 20.4187 3.35866 20.2491 3.39121 20.0854C3.42377 19.9217 3.50413 19.7714 3.62213 19.6534C3.74013 19.5354 3.89047 19.455 4.05414 19.4225C4.21782 19.3899 4.38747 19.4066 4.54164 19.4705C4.69582 19.5343 4.82759 19.6425 4.9203 19.7812C5.01302 19.92 5.0625 20.0831 5.0625 20.25C5.0625 20.4738 4.97361 20.6884 4.81537 20.8466C4.65714 21.0049 4.44253 21.0938 4.21875 21.0938Z" fill="url(#paint1_linear)"/>
          <path d="M24.9607 3.375L26.0959 1.48289C26.1344 1.41888 26.1552 1.34582 26.1561 1.27115C26.1571 1.19649 26.1383 1.1229 26.1015 1.05791C26.0647 0.992918 26.0114 0.938848 25.9469 0.901222C25.8824 0.863597 25.809 0.843764 25.7344 0.84375H19.8281C19.7162 0.84375 19.6089 0.888197 19.5298 0.967314C19.4507 1.04643 19.4062 1.15374 19.4062 1.26562V8.4375H20.25V5.90625H25.7344C25.809 5.90624 25.8824 5.8864 25.9469 5.84878C26.0114 5.81115 26.0647 5.75708 26.1015 5.69209C26.1383 5.6271 26.1571 5.55351 26.1561 5.47885C26.1552 5.40418 26.1344 5.33112 26.0959 5.26711L24.9607 3.375ZM20.25 5.0625V1.6875H24.9893L24.1072 3.15773C24.0678 3.22335 24.047 3.29845 24.047 3.375C24.047 3.45155 24.0678 3.52665 24.1072 3.59227L24.9893 5.0625H20.25Z" fill="url(#paint2_linear)"/>
          <path d="M10.125 16.0312H18.1406C18.9238 16.0312 19.675 16.3424 20.2288 16.8962C20.7826 17.45 21.0938 18.2012 21.0938 18.9844C21.0938 19.7676 20.7826 20.5187 20.2288 21.0725C19.675 21.6264 18.9238 21.9375 18.1406 21.9375H8.4375V22.7812H18.1406C19.1476 22.7812 20.1134 22.3812 20.8254 21.6692C21.5375 20.9571 21.9375 19.9914 21.9375 18.9844C21.9375 17.9774 21.5375 17.0116 20.8254 16.2996C20.1134 15.5875 19.1476 15.1875 18.1406 15.1875H10.125C8.78234 15.1875 7.49467 14.6541 6.54527 13.7047C5.59587 12.7553 5.0625 11.4677 5.0625 10.125C5.0625 8.78234 5.59587 7.49467 6.54527 6.54527C7.49467 5.59587 8.78234 5.0625 10.125 5.0625H18.5625V4.21875H10.125C8.55857 4.21875 7.05629 4.84101 5.94865 5.94865C4.84101 7.05629 4.21875 8.55857 4.21875 10.125C4.21875 11.6914 4.84101 13.1937 5.94865 14.3013C7.05629 15.409 8.55857 16.0312 10.125 16.0312Z" fill="url(#paint3_linear)"/>
          <defs>
          <linearGradient id="paint0_linear" x1="4.21887" y1="16.875" x2="4.21887" y2="28.2734" gradientUnits="userSpaceOnUse">
          <stop stop-color="#00E0FF"/>
          <stop offset="1" stop-color="#0047FF"/>
          </linearGradient>
          <linearGradient id="paint1_linear" x1="4.21875" y1="18.5625" x2="4.21875" y2="22.7076" gradientUnits="userSpaceOnUse">
          <stop stop-color="#00E0FF"/>
          <stop offset="1" stop-color="#0047FF"/>
          </linearGradient>
          <linearGradient id="paint2_linear" x1="22.7812" y1="0.84375" x2="22.7812" y2="10.1703" gradientUnits="userSpaceOnUse">
          <stop stop-color="#00E0FF"/>
          <stop offset="1" stop-color="#0047FF"/>
          </linearGradient>
          <linearGradient id="paint3_linear" x1="13.0781" y1="4.21875" x2="13.0781" y2="27.017" gradientUnits="userSpaceOnUse">
          <stop stop-color="#00E0FF"/>
          <stop offset="1" stop-color="#0047FF"/>
          </linearGradient>
          </defs>
        </svg>
        <span className="lefSideMenuTabTitle">Роадмапы</span>
      </div>
    )
  }

  const logoutHandler = () => {
    clearUserData();
    document.location.reload();
  }

  return isAuthorized ? (
    <div className={classes.managerPanelContainer}>
      <div className="leftSideMenu">
        <div className="userInfoBlock">
          <div className="userAvatarBlock">
            <img />
          </div>
          <span className="userNameTitle">
            Игорь Николаев
          </span>
        </div>
        <Tabs
            orientation="vertical"
            variant="scrollable"
            value={currentTab}
            onChange={handleChangeTab}
            aria-label="Vertical tabs example"
            className={classes.tabs}
            
        >
            <Tab
              label={employeeLabelContent()} 
              // label="Сотрудники"
              id="vertical-tab-0"
              aria-controls="vertical-tabpanel-0"
            />
            <Tab
              label={roadmapsLabelContent()}
              id="vertical-tab-1"
              aria-controls="vertical-tabpanel-1"
            />
            <Tab
              label={
                <a href={GOOGLE_FORMS_COMMENT_LINK}>
                  Отзыв
                </a>
              }
              id="vertical-tab-2"
              aria-controls="vertical-tabpanel-2"
            />
            <Tab
              label="Статистика"
              id="vertical-tab-3"
              aria-controls="vertical-tabpanel-3"
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
        <TabPanel value={currentTab} index={3} className={classes.tabPanelContainer}>
          <ManagerMetrics />
        </TabPanel>
    </div>
  ) : (
    <Redirect to="/auth" />
  )
};

export default ManagerPage;
