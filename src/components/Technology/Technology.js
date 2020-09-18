import React, { useState, useEffect } from 'react';

//components
import { Typography } from '@material-ui/core';
import CourseReview from '../CourseReview/CourseReview';

//styles
import { useStyles } from './Technology.styles';

const Technology = React.memo(({ techTitle, courses, managerView, courseName }) => {
  const classes = useStyles();

  //state - courses completed or not
  const getState = () => {
    let myState = {};
    for (let item of courses) {
      let key = item.id;
      myState[key] = item.completed;
    }
    return myState;
  };

  const [state, setState] = useState(getState);
  console.log('state', state);

  //UPDATE COURSE TO BE COMPLETE
  const POSTrequestOptions = {
    method: 'POST',
    headers: {
      Authorization: 'Bearer 171|49RqSGZ7IuvLUEBT4RHDXDXyfSjLx09HDRA2YLE6',
      'Content-Type': 'application/json'
    }
  };
  //UPDATE COURSE TO BE INCOMPLETE
  const DELETErequestOptions = {
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer 171|49RqSGZ7IuvLUEBT4RHDXDXyfSjLx09HDRA2YLE6',
      'Content-Type': 'application/json'
    }
  };

  const getUrl = (courseName = 'iusto-velit-sed') =>
    `http://influx-roadmap.herokuapp.com/api/courses/${courseName}/completions`;

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
  };

  //modal window logic
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log('isModalOpen', isModalOpen);
  const hideReviewCourseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <li className={classes.roadMapItem}>
      <Typography variant="subtitle1">{techTitle}</Typography>
      <ul className={classes.coursesList}>
        {courses.map(({ id, name, url }) => (
          <li key={id} className={classes.courseItem}>
            <input
              type="checkbox"
              checked={state[id]}
              name={id}
              disabled={managerView ? true : false}
              onChange={handleChange}
              className={classes.checkbox}
            />
            {/* open modal window to review the course */}
            {isModalOpen && (
              <CourseReview isModalOpen={isModalOpen} closeModal={hideReviewCourseModal} />
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
