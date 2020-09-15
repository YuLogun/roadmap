import React, { useState } from "react";

//components
import Button from '@material-ui/core/Button';

// import Modals from '../Modals/Modals';
import PresetAdder from '../ModalsList/PresetAdder/PresetAdder';
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
      },
      {
        id: 2,
        name: 'Васичкин П.В.'
      }
    ];
  };

  const showPresetAdder = () => {
    debugger;
  }

  return (
    <div className={classes.managerPanelContainer}>
      <PresetAdder />
      <div className={classes.sideMenu}>
        <div className={classes.managerBlock}>
          <span>Менеджер: Иванов И. И.</span>
        </div>
        <UserList usersData={getUsersData()} currentUserId={(userId) => userRoadmapInit(userId)} />
      </div>
      <div className={classes.adminPanelContent}>
        <Button variant="contained" color="primary" onClick={showPresetAdder}>
          Назначить
        </Button>
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
