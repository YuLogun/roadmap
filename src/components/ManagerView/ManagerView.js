import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getDeveloperRoadmap, savePresetOnDeveloper, saveCourse } from '../../redux/reducer';

//components
import Button from '@material-ui/core/Button';
import PresetAdder from '../ModalsList/PresetAdder/PresetAdder';
import CourseAdder from '../ModalsList/CourseAdder/CourseAdder';
import Roadmap from '../Roadmap/Roadmap';
import UserList from '../UserList/UserList';

//services
import { getNameUser } from '../../services/Authorization.service';

//styles
import { useStyles } from './ManagerView.styles';

const ManagerView = () => {
  const classes = useStyles();

  //redux hooks
  const courses = useSelector((state) => state.courses);
  const isAuthorized = useSelector(state => state.isAuthorized);
  const developersList = useSelector(state => state.developersList);
  const currentRoadmaps = useSelector(state => state.currentDeveloperRoadmaps);
  const dispatch = useDispatch();

  //local states
  const [isPresetAdderOpen, setPresetAdderDisplay] = useState(false);
  const [isCourseAdderOpen, setCourseAdderDisplay] = useState(false);

  //Функция для отображения модального окна назначения пресета
  const showPresetAdder = () => {
    setPresetAdderDisplay(true);
  };

  //Функция для скрытия модального окна назначения пресета
  const hidePresetAdder = () => {
    setPresetAdderDisplay(false);
  };

  //Функция для отправки данных модального окна назначения пресета
  const submitPresetAdder = (sCurrentUser, sCurrentPreset) => {
    dispatch(savePresetOnDeveloper(sCurrentUser, sCurrentPreset));
    setPresetAdderDisplay(false);
  };

  //Функция для отображения модального окна предложения курса
  const showCourseAdder = () => {
    setCourseAdderDisplay(true);
  };

  //Функция для скрытия модального окна предложения курса
  const hideCourseAdder = () => {
    setCourseAdderDisplay(false);
  };

  //Функция для отправки данных модального окна предложения курса
  const submitCourseAdder = (e, courseLink) => {
    dispatch(saveCourse(courseLink));
    setCourseAdderDisplay(false);
  };

  const initEmployeeData = (username) => {
    dispatch(getDeveloperRoadmap(username));
  }

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
        employeeList={developersList}
      />
      <CourseAdder
        isOpen={isCourseAdderOpen}
        onCancel={hideCourseAdder}
        onSubmit={submitCourseAdder}
      />
      <div className={classes.sideMenu}>
        <div className={classes.managerBlock}>
          <span>Менеджер: <br />{getNameUser()}</span>
        </div>
        <UserList currentUserId={(username) => initEmployeeData(username)} />
      </div>
      <div className={classes.adminPanelContent}>
        <div className={classes.adminPanelHeader}></div>
        <div className={classes.adminPanelBody}>
          {
            currentRoadmaps ? (
              currentRoadmaps.map(roadmap => (
                <Roadmap
                  roadmapData={roadmap.preset}
                  managerView
                />
              ))
            ) : (
              <div>Выберите сотрудника</div>
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
  ) : (
    <Redirect to="/auth" />
  )
};

export default ManagerView;
