import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { rateCourseAndAddCertificate } from '../../redux/reducer';

//components
import { Modal, Typography, Box, Button } from '@material-ui/core';
import { Rating } from '@material-ui/lab';

//styles
import { useStyles } from './CourseReview.styles';

const CourseReview = ({ isModalOpen, closeModal, courseName }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  //rating
  const [ratingValue, setRatingValue] = useState(0);
  const changeRatingValue = (e, newValue) => {
    setRatingValue((state) => {
      console.log('rating', newValue);
      return newValue;
    });
  };

  //cerificate
  const [certificate, setCertificate] = useState('');
  const handleGettingCertificate = (e) => setCertificate(e.target.value);

  const submitHandler = () => {
    const slug = courseName.split(' ').join('-');
    dispatch(rateCourseAndAddCertificate(slug, ratingValue, certificate));
    closeModal();
  };

  const body = (
    <div className={classes.paper}>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend" variant="h6">
          Оцените, пожалуйста, пройденный курс:
        </Typography>
        <Rating
          name="simple-controlled"
          value={ratingValue}
          onChange={changeRatingValue}
          max={10}
        />
        <Typography component="legend" variant="h6">
          Прикрепите, пожалуйста, сертификат
        </Typography>
        <input value={certificate} onChange={handleGettingCertificate} type="text" />
      </Box>
      <Button onClick={submitHandler} variant="contained" color="primary">
        Submit
      </Button>
    </div>
  );

  return (
    <div className={classes.modal}>
      <Modal
        open={isModalOpen}
        onClose={closeModal}
        aria-labelledby="review-completed-course-modal"
        className={classes.modalWindow}
      >
        {body}
      </Modal>
    </div>
  );
};

export default CourseReview;
