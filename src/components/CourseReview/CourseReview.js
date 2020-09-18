import React, { useState } from 'react';

//components
import { Modal, Typography, Box, Button } from '@material-ui/core';
import { Rating } from '@material-ui/lab';

//styles
import { useStyles } from './CourseReview.styles';

const CourseReview = ({ isModalOpen, closeModal }) => {
  const classes = useStyles();

  //rating
  const [ratingValue, setRatingValue] = useState(2);
  const [valueOftheRating, setValue] = useState('');
  const changeRatingValue = (e, newValue) => {
    setRatingValue((state) => {
      console.log('rating', newValue);
      return newValue;
    });
    setValue(newValue);
  };

  //cerificate
  let sampleCertificate =
    'https://github.com/Sponom/xss-fe-2020-state-management/tree/master/1-react-class-local-state';
  const [certificate, setCertificate] = useState(sampleCertificate);
  const handleGettingCertificate = (e) => setCertificate(e.target.value);

  //update courses's rating and add certificate
  const getUrl = (courseName = 'iusto-velit-sed') =>
    `http://influx-roadmap.herokuapp.com/api/courses/${courseName}/completions`;

  const ratingAndCertificate = {
    rating: ratingValue,
    certificate: certificate
  };

  const PUTrequestOptions = {
    method: 'PUT',
    headers: {
      Authorization: 'Bearer 171|49RqSGZ7IuvLUEBT4RHDXDXyfSjLx09HDRA2YLE6',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(ratingAndCertificate)
  };

  const submitHandler = () => {
    fetch(getUrl(), PUTrequestOptions)
      .then((res) => {
        console.log('rating updated');
        return res.json();
      })
      .then((res) => console.log(res));
    closeModal();
  };

  const body = (
    <div className={classes.paper}>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend" variant="h6">
          Оцените, пожалуйста, пройденный курс:
        </Typography>
        <div>{valueOftheRating}</div>
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
