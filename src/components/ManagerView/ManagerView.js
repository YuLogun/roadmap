import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../../redux/reducer';

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

  //redux hooks
  const data = useSelector((state) => state.data);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData(coursesTestData));
  }, []);

  const getUserRoadmap = (userId) => {
    const result = coursesTestData.filter((roadmap) => roadmap.employee_id === userId)[0];
    return result.roadmap;
  };

  const [currentUser, setUserId] = React.useState(0);
  const [currentRoadmap, setRoadmap] = useState(() => getUserRoadmap(0));
  const [isModalOpen, setModalDisplay] = React.useState(false);

  const userRoadmapInit = (userId) => {
    setUserId(userId);
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
    setModalDisplay(true);
  }

  const hidePresetAdder = () => {
    setModalDisplay(false);
  }

  const submitPresetAdder = () => {
    setModalDisplay(false);
  } 

  return (
    <div className={classes.managerPanelContainer}>
      <PresetAdder
        isOpen={isModalOpen}
        onCancel={hidePresetAdder}
        onSubmit={submitPresetAdder}
        currentUser={currentUser}
      />
      <div className={classes.sideMenu}>
        <div className={classes.managerBlock}>
          <span>Менеджер: Иванов И. И.</span>
        </div>
        <UserList usersData={getUsersData()} currentUserId={(userId) => userRoadmapInit(userId)} />
      </div>
      <div className={classes.adminPanelContent}>
        <div className={classes.adminPanelHeader}></div>
        <div className={classes.adminPanelBody}>
          {
            loading ? (
              <div>Loading...</div>
            ) : (
              currentRoadmap ? (
                <Roadmap
                  roadmapTitle={currentRoadmap.roadmap_title}
                  coursesTestData={currentRoadmap.roadmap_info}
                  managerView
                />
              ) : ( <div>Empty</div> )
            )          
          }
        </div>
        <div className={classes.adminPanelFooter}>
          <Button variant="contained" color="primary" onClick={showPresetAdder}>
            Назначить
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ManagerView;
