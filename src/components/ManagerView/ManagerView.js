import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDeveloperRoadmap } from '../../redux/reducer';

//components
import Button from '@material-ui/core/Button';

// import Modals from '../Modals/Modals';
import PresetAdder from '../ModalsList/PresetAdder/PresetAdder';
import CourseAdder from '../ModalsList/CourseAdder/CourseAdder';
import Roadmap from '../Roadmap/Roadmap';
import UserList from '../UserList/UserList';

//styles
import { useStyles } from './ManagerView.styles';
import { Redirect } from 'react-router-dom';

const ManagerView = () => {
  const classes = useStyles();

  //const loading = false;

  //redux hooks
  const courses = useSelector((state) => state.courses);
  const loading = useSelector((state) => state.loading);
  const isAuthorized = useSelector(state => state.isAuthorized);
  const developersList = useSelector(state => state.developersList);
  const currentRoadmaps = useSelector(state => state.currentDeveloperRoadmaps);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getDataFromAPI(userToken));
  // }, []);

  // const getUserRoadmap = (userId) => {
  //   const result = coursesTestData.filter((roadmap) => roadmap.employee_id === userId)[0];
  //   return result.roadmap;
  // };

  // const [employeeList, setEmployeeList] = useState(getEmployees());
  // const [currentEmployeeUsername, setcurrentEmployeeUsername] = useState(employeeList[0].username);
  //TODO: Когда будет готово переделать на реальные данные
  // const [currentRoadmaps, setRoadmaps] = useState([].push(getUserRoadmap(0)));
  // const [currentRoadmaps, setRoadmaps] = useState([getUserRoadmap(0)]);
  // debugger;

  const [currentRoadmaps1, setRoadmaps1] = useState([]);

  const [isPresetAdderOpen, setPresetAdderDisplay] = React.useState(false);
  const [isCourseAdderOpen, setCourseAdderDisplay] = React.useState(false);

  // const userRoadmapInit = (username) => {
  //   // debugger;
  //   const requestUrl = 'http://influx-roadmap.herokuapp.com/api/roadmaps/' + username;
  //   const requestParams = {
  //     method: 'GET',
  //     headers: {
  //       Authorization: 'Bearer ' + userToken
  //     }
  //   };

  //   fetch(requestUrl, requestParams)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setRoadmaps1(data.data);
  //       debugger;
  //     });
  //   //TODO: Добавить запрос на получение Roadmap к пользователю
  // };

  const showPresetAdder = () => {
    setPresetAdderDisplay(true);
  };

  const hidePresetAdder = () => {
    setPresetAdderDisplay(false);
  };

  const submitPresetAdder = (sCurrentUser, sCurrentPreset) => {
    // const setPresetRequestOptions = {
    //   method: 'POST',
    //   headers: {
    //     Authorization: 'Bearer ' + userToken
    //   },
    //   body: JSON.stringify({
    //     employee: sCurrentUser,
    //     preset: sCurrentPreset
    //   })
    // };

    //TODO: раскоментировать когда начну получать валидные данные
    //Запрос на отправку данных о прикреплении пресета для сотрудника
    // fetch('http://influx-roadmap.herokuapp.com/api/roadmaps', setPresetRequestOptions)
    //   .then(res => res.json())
    //   .then(data => {
    //     debugger;
    //   });
    setPresetAdderDisplay(false);
  };

  const showCourseAdder = () => {
    setCourseAdderDisplay(true);
  };

  const hideCourseAdder = () => {
    setCourseAdderDisplay(false);
  };

  const submitCourseAdder = (e, courseLink) => {
    // const requestUrl = 'http://influx-roadmap.herokuapp.com/api/courses/suggestions';
    // const requestParams = {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: 'Bearer ' + userToken
    //   },
    //   body: JSON.stringify({
    //     source: courseLink
    //   })
    // };

    // fetch(requestUrl, requestParams)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.errors) {
    //       let errorMsg = '';
    //       for (let key in data.errors) {
    //         errorMsg += data.errors[key][0];
    //         console.error(data.errors[key]);
    //       }
    //       alert(errorMsg);

    //       return false;
    //     }

        setCourseAdderDisplay(false);
      // });
  };
  console.log('COURSES', courses);

  // debugger;

  return isAuthorized ? (
    <div className={classes.managerPanelContainer}>
      <pre>
        {courses.map((course) => (
          <div key={course.id}>{course.name}</div>
        ))}
      </pre>
      <PresetAdder
        isOpen={isPresetAdderOpen}
        onCancel={hidePresetAdder}
        onSubmit={submitPresetAdder}
        // currentUser={currentEmployeeUsername}
        employeeList={developersList}
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
        <UserList currentUserId={(username) => dispatch(getDeveloperRoadmap(username))} />
      </div>
      <div className={classes.adminPanelContent}>
        <div className={classes.adminPanelHeader}></div>
        <div className={classes.adminPanelBody}>
          {/* {
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
          } */}
          {
            currentRoadmaps ? (
              currentRoadmaps.map(roadmap => (
                <Roadmap
                  roadmapData={roadmap.preset}
                  // roadmapTitle={roadmap.roadmap_title}
                  // coursesTestData={roadmap.roadmap_info}
                  managerView
                />
              ))
            ) : (
              <div>Empty</div>
            )
          }
          {/* {loading ? (
            <div>Loading...</div>
          ) : currentRoadmaps.length > 0 ? (
            currentRoadmaps.map((roadmap) => (
              <Roadmap
                roadmapData={roadmap.preset}
                // roadmapTitle={roadmap.roadmap_title}
                // coursesTestData={roadmap.roadmap_info}
                managerView
              />
            ))
          ) : (
            <div>Empty</div>
          )} */}
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
  ) : (
    <Redirect to="/auth" />
  )
};

export default ManagerView;
