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
    return result.roadmap;
  };

  const getUserRoadmap1 = (username, data) => {
    let currentUser = data.employees.filter(employee => employee.user.username === username)[0];
    return currentUser.roadmaps;
  };

  const getEmployees = (data) => {
    let result = [ ];
    if (data.data.employees.length > 0) {
      result = data.data.employees.map(employee => {
        return {
          username: employee.user.username,
          name: employee.user.name
        }
      })
    }
    return result;
  }

  const [employeeList, setEmployeeList] = useState(getEmployees(managerViewData));
  const [currentEmployee, setcurrentEmployee] = useState(employeeList[0].username);
  const [currentRoadmap1, setRoadmap1] = useState(getUserRoadmap1(currentEmployee, managerViewData.data));

  const [currentUser, setUserId] = React.useState(0);
  const [currentRoadmap, setRoadmap] = useState(() => getUserRoadmap(0));
  const [isPresetAdderOpen, setPresetAdderDisplay] = React.useState(false);
  const [isCourseAdderOpen, setCourseAdderDisplay] = React.useState(false);

  const roadmapRequestOptions = {
      method: 'GET',
      headers: {
          "Authorization": "Bearer " + userToken
      }
  }

  const userRoadmapInit = (username) => {
    debugger;

    fetch('http://influx-roadmap.herokuapp.com/api/dashboard/employees/' + username, roadmapRequestOptions)
            .then(res => res.json())
            .then(data => {
              debugger;
                // setPresets(data.data);
                // setData(false);
                // console.log(data.data);
            });

    // setUserId(userId);
    // let userRoadmap = getUserRoadmap(userId);
    // setRoadmap(userRoadmap);
  };

  const showPresetAdder = () => {
    setPresetAdderDisplay(true);
  }

  const hidePresetAdder = () => {
    setPresetAdderDisplay(false);
  }

  const submitPresetAdder = () => {
    setPresetAdderDisplay(false);
  }

  const showCourseAdder = () => {
    setCourseAdderDisplay(true);
  }

  const hideCourseAdder = () => {
    setCourseAdderDisplay(false);
  }

  const submitCourseAdder = () => {
    // fetch('http://influx-roadmap.herokuapp.com/api/presets', presetsRequestOptions)
    //   .then(res => res.json())
    //   .then(data => {
    //       setPresets(data.data);
    //       setData(false);
    //       console.log(data.data);
    //   });
    setCourseAdderDisplay(false);
  }

  return (
    <div className={classes.managerPanelContainer}>
      <PresetAdder
        isOpen={isPresetAdderOpen}
        onCancel={hidePresetAdder}
        onSubmit={submitPresetAdder}
        currentUser={currentEmployee}
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
