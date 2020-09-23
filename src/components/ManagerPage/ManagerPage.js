// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Redirect } from 'react-router-dom';

// //components
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';

// //styles
// import { useStyles } from './ManagerPage.styles';

// const ManagerPage = () => {
//   const classes = useStyles();

//   //redux hooks
//   const courses = useSelector((state) => state.courses);
//   const isAuthorized = useSelector(state => state.isAuthorized);
//   const developersList = useSelector(state => state.developersList);
//   const currentRoadmaps = useSelector(state => state.currentDeveloperRoadmaps);
//   const dispatch = useDispatch();

//   return isAuthorized ? (
//     <div className={classes.managerPanelContainer}>
//         <Tabs
//             orientation="vertical"
//             variant="scrollable"
//             // value={value}
//             // onChange={handleChange}
//             aria-label="Vertical tabs example"
//             className={classes.tabs}
//         >
//             <Tab label="Item One" {...a11yProps(0)} />
//             <Tab label="Item Two" {...a11yProps(1)} />
//             <Tab label="Item Three" {...a11yProps(2)} />
//             <Tab label="Item Four" {...a11yProps(3)} />
//             <Tab label="Item Five" {...a11yProps(4)} />
//             <Tab label="Item Six" {...a11yProps(5)} />
//             <Tab label="Item Seven" {...a11yProps(6)} />
//         </Tabs>
//         <TabPanel value={value} index={0}>
//             Item One
//         </TabPanel>
//         <TabPanel value={value} index={1}>
//             Item Two
//         </TabPanel>
//         <TabPanel value={value} index={2}>
//             Item Three
//         </TabPanel>
//         <TabPanel value={value} index={3}>
//             Item Four
//         </TabPanel>
//         <TabPanel value={value} index={4}>
//             Item Five
//         </TabPanel>
//         <TabPanel value={value} index={5}>
//             Item Six
//         </TabPanel>
//         <TabPanel value={value} index={6}>
//             Item Seven
//         </TabPanel>
//     </div>
//   ) : (
//     <Redirect to="/auth" />
//   )
// };

// export default ManagerPage;
