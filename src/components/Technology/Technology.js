import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { completeCourse, undoCompleteCourse } from '../../redux/reducer';

//components
import { Typography } from '@material-ui/core';
import CourseReview from '../CourseReview/CourseReview';

//styles
import { useStyles } from './Technology.styles';

const Technology = React.memo(({ techTitle, courses, managerView }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  //state - courses completed or not
  /* const getState = () => {
    let myState = {};
    for (let item of courses) {
      let key = item.name;
      myState[key] = item.completed;
    }
    return myState;
  };

  const [state, setState] = useState(getState);
  console.log('state', state);
 */
  const handleChange = (e, courseName) => {
    const { name, checked } = e.target;
    /*setState((state) => {
      const newState = { ...state, [name]: checked };
      return newState;
    }); */
    //UPDATE THE COURSE STATUS TO BE COMPLETED OR INCOMPLETE
    const slug = courseName.split(' ').join('-');
    checked ? dispatch(completeCourse(slug)) : dispatch(undoCompleteCourse(slug));
    checked ? setIsModalOpen(true) : setIsModalOpen(false);
  };

  //modal window logic
  const [isModalOpen, setIsModalOpen] = useState(false);
  const hideReviewCourseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <li className={classes.roadMapItem}>
      <Typography variant="subtitle1">{techTitle}</Typography>
      <ul className={classes.coursesList}>
        {courses.map(({ id, name, url, completed_at }) => (
          <li key={id} className={classes.courseItem}>
            <input
              type="checkbox"
              /*  checked={state[id]} */
              checked={completed_at}
              name={id}
              disabled={managerView ? true : false}
              onChange={(e) => handleChange(e, name)}
              className={classes.checkbox}
            />
            {/* open modal window to review the course */}
            {isModalOpen && (
              <CourseReview
                courseName={name}
                isModalOpen={isModalOpen}
                closeModal={hideReviewCourseModal}
              />
            )}
            <a href={url}>
              <Typography component="span" variant="subtitle1">
                {name}
              </Typography>
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
});

export default Technology;

/* 
const handleChange = (e) => {
  const { name, checked } = e.target;
  setState((state) => {
    const newState = { ...state, [name]: checked };
    return newState;
  });
  //UPDATE THE COURSE STATUS TO BE COMPLETED OR INCOMPLETE
  checked
    ? fetch(getUrl(), POSTrequestOptions).then((res) => console.log('course is completed'))
    : fetch(getUrl(), DELETErequestOptions).then((res) => console.log('course is NOT completed'));
  checked ? setIsModalOpen(true) : setIsModalOpen(false);
}; */
