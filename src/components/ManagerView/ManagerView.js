import React, { useState } from "react";

//components
import Roadmap from '../Roadmap/Roadmap';
import UserList from '../UserList/UserList';

//test data
import { coursesTestData } from '../DeveloperView/coursesTestData';

//styles
import { useStyles } from './ManagerView.styles';

const ManagerView = () => {
  const classes = useStyles();

  const getUserRoadmap = (userId) => {
    const result = coursesTestData.filter((roadmap) => roadmap.employee_id === userId)[0];
    return result.roadmap;
  };

  const [currentRoadmap, setRoadmap] = useState(() => getUserRoadmap(0));

  const userRoadmapInit = (userId) => {
    let userRoadmap = getUserRoadmap(userId);
    setRoadmap(userRoadmap);
  };

  const getUsersData = () => {
    return [
      {
        id: 0,
        name: 'Хаценкевич В.А.'
      },
      {
        id: 1,
        name: 'Петров К.Ф.'
      }
    ];
  };

  return (
    <div className={classes.managerPanelContainer}>
      <div className={classes.sideMenu}>
        <div className={classes.managerBlock}>
          <span>Менеджер: Иванов И. И.</span>
        </div>
        <UserList usersData={getUsersData()} currentUserId={(userId) => userRoadmapInit(userId)} />
      </div>
      <div className={classes.adminPanelContent}>
        <Roadmap
          roadmapTitle={currentRoadmap.roadmap_title}
          coursesTestData={currentRoadmap.roadmap_info}
          handleState={() => {}}
          managerView
        />
      </div>
    </div>
  );
};

export default ManagerView;
