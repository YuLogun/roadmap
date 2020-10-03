import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../../redux/reducer';
import { Redirect, Switch, Route } from 'react-router-dom';
import { getDeveloperRoadmap, savePresetOnDeveloper, saveCourse } from '../../redux/reducer';
//services
import { getUsername, getNameUser } from '../../services/Authorization.service';

//components
import Roadmap from '../Roadmap/Roadmap';
import RoadmapList from '../RoadmapList/RoadmapList';
import RolesAppBar from '../RolesAppBar/RolesAppBar';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CourseAdder from '../ModalsList/CourseAdder/CourseAdder';
import EmployeeRoadmap from '../EmployeeRoadmap/EmployeeRoadmap';
import RoadmapLineView from '../RoadmapLineView/RoadmapLineView';

//styles
import { useStyles } from './DeveloperPage.styles';

const DeveloperView = () => {
  const classes = useStyles();

  const loading = useSelector((state) => state.loading);
  const currentRoadmaps = useSelector((state) => state.currentDeveloperRoadmaps);
  const isAuthorized = useSelector(state => state.isAuthorized);
  const dispatch = useDispatch();

  const [courseAdderIsOpen, setCourseAdderIsOpen] = useState(false);

  useEffect(() => {
    dispatch(getDeveloperRoadmap(getUsername()));
  }, []);

  const courseAdderCancelHandler = () => {
    setCourseAdderIsOpen(false);
  }

  const courseAdderSubmitHandler = (couseLink) => {
    dispatch(saveCourse(couseLink));
    setCourseAdderIsOpen(false);
  }


  // debugger;

  return isAuthorized ? (
    <div>
      <CourseAdder 
        isOpen={courseAdderIsOpen}
        onCancel={courseAdderCancelHandler} 
        onSubmit={courseAdderSubmitHandler}
      />
      <RolesAppBar manager="Иванов И.И." employee={getNameUser()} />

      {
        currentRoadmaps ? (
          <div className={classes.roadmapsContainer}>
            {
              currentRoadmaps.map(roadmapData => (
                <dis className={classes.roadmapContainer}>
                  <RoadmapLineView
                    currentRoadmap={roadmapData}
                    className={classes.roadmapElement}
                  />
                </dis>
              ))
            }
          </div>
        ) : (
          <div>Loading...</div>
        )
      }

      {/* {loading ? (
        <div>Loading...</div>
      ) : (
        <div className={classes.container}>
          {currentRoadmaps ? (
            currentRoadmaps.map((roadmap) => (
              <RoadmapList
                styles={{ top: '100px', position: 'relative' }}
                roadmapsData={roadmap.preset}
              />
            ))
          ) : (
            <div>loading...</div>
          )}
          {currentRoadmaps ? (
            currentRoadmaps.map((roadmap) => (
              <Roadmap
                styles={{ top: '100px', position: 'relative' }}
                roadmapData={roadmap.preset}
              />
            ))
          ) : (
            <div>loading...</div>
          )}
        </div>
      )} */}
      <Fab 
        color="primary" 
        aria-label="add"
        className={classes.addCourseButton}
        onClick={(e) => setCourseAdderIsOpen(true)}
      >
        <AddIcon />
      </Fab>
    </div>
  ) : (
    <Redirect to="/auth" />
  );
};

export default DeveloperView;
