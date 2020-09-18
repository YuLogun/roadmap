import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getData, getManagerViewData } from '../../redux/reducer';

//components
import Button from '@material-ui/core/Button';

// import Modals from '../Modals/Modals';
import PresetAdder from '../ModalsList/PresetAdder/PresetAdder';
import CourseAdder from '../ModalsList/CourseAdder/CourseAdder';
import Roadmap from '../Roadmap/Roadmap';
import UserList from '../UserList/UserList';

//test data
import { coursesTestData } from '../DeveloperView/coursesTestData';
import { managerViewData } from '../../APISettings/manager_dashboard';
import { getEmployees, getRoadmapByUsername } from './ManagetTest';
import { userToken } from '../../APISettings/APISettings';

//styles
import { useStyles } from './ManagerView.styles';

const ManagerView = () => {
  const classes = useStyles();

  //redux hooks
  const data = useSelector((state) => state.data);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getManagerViewData(managerViewData));
    dispatch(getData(coursesTestData));
  }, []);

  const getUserRoadmap = (userId) => {
    const result = coursesTestData.filter((roadmap) => roadmap.employee_id === userId)[0];
    // debugger;
    return result.roadmap;
  };

  const [employeeList, setEmployeeList] = useState(getEmployees());
  const [currentEmployeeUsername, setcurrentEmployeeUsername] = useState(employeeList[0].username);
  //TODO: Когда будет готово переделать на реальные данные
  // const [currentRoadmaps, setRoadmaps] = useState([].push(getUserRoadmap(0)));
  const [currentRoadmaps, setRoadmaps] = useState([ getUserRoadmap(0) ]);
  // debugger;

  const [isPresetAdderOpen, setPresetAdderDisplay] = React.useState(false);
  const [isCourseAdderOpen, setCourseAdderDisplay] = React.useState(false);

  const roadmapRequestOptions = {
      method: 'GET',
      headers: {
          "Authorization": "Bearer " + userToken
      }
  }

  const userRoadmapInit = (username) => {
    //TODO: Добавить запрос на получение Roadmap к пользователю
  };

  const showPresetAdder = () => {
    setPresetAdderDisplay(true);
  }

  const hidePresetAdder = () => {
    setPresetAdderDisplay(false);
  }

  const submitPresetAdder = (sCurrentUser, sCurrentPreset) => {
    const setPresetRequestOptions = {
      method: 'POST',
      headers: {
        "Authorization": "Bearer " + userToken
      },
      body: JSON.stringify({
        employee: sCurrentUser,
        preset: sCurrentPreset
      })
    }

    //TODO: раскоментировать когда начну получать валидные данные
    //Запрос на отправку данных о прикреплении пресета для сотрудника
    // fetch('http://influx-roadmap.herokuapp.com/api/roadmaps', setPresetRequestOptions)
    //   .then(res => res.json())
    //   .then(data => {
    //     debugger;
    //   });
    setPresetAdderDisplay(false);
  }

  const showCourseAdder = () => {
    setCourseAdderDisplay(true);
  }

  const hideCourseAdder = () => {
    setCourseAdderDisplay(false);
  }

  const submitCourseAdder = () => {
    setCourseAdderDisplay(false);
  }

  return (
    <div className={classes.managerPanelContainer}>
      <PresetAdder
        isOpen={isPresetAdderOpen}
        onCancel={hidePresetAdder}
        onSubmit={submitPresetAdder}
        currentUser={currentEmployeeUsername}
        employeeList={employeeList}
      />
      <CourseAdder
        isOpen={isCourseAdderOpen}
        onCancel={hideCourseAdder}
        onSubmit={submitCourseAdder}
      />
      <div className={classes.sideMenu}>
        <div className={classes.managerBlock}>
          <span>Менеджер: Иванов И. И.</span>
        </div>
        <UserList usersData={employeeList} currentUserId={(userId) => userRoadmapInit(userId)} />
      </div>
      <div className={classes.adminPanelContent}>
        <div className={classes.adminPanelHeader}></div>
        <div className={classes.adminPanelBody}>
          {
            loading ? (
              <div>Loading...</div>
            ) : (
              currentRoadmaps.length > 0 ? (
                currentRoadmaps.map(roadmap => (
                  <Roadmap
                    roadmapData={roadmap}
                    roadmapTitle={roadmap.roadmap_title}
                    coursesTestData={roadmap.roadmap_info}
                    managerView
                  />
                ))
              ) : ( <div>Empty</div> )
            )
          }
        </div>
        <div className={classes.adminPanelFooter}>
          <div className={classes.buttonBlock}>
            <Button
              variant="contained"
              color="primary"
              onClick={showCourseAdder}
              className={classes.footerBtn}
            >
              Добавить курс
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={showPresetAdder}
              className={classes.footerBtn}
            >
              Назначить
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerView;
