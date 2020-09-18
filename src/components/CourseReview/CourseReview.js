import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Typography, Box } from "@material-ui/core";
import { Rating } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modalWindow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const CourseReview = ({ isModalOpen, closeModal }) => {
  const classes = useStyles();

  //rating
  const [ratingValue, setRatingValue] = useState(2);
  const changeRatingValue = (e, newValue) => {
    console.log("rating", e.target);
    setRatingValue(newValue);
  };

  //update courses's rating
  const getUrl = (courseName = "ducimus-et-voluptatem") =>
    `http://influx-roadmap.herokuapp.com/api/courses/${courseName}/completions`;

  const ratingAndCertificate = {
    rating: ratingValue,
    certificate:
      "https://github.com/Sponom/xss-fe-2020-state-management/tree/master/1-react-class-local-state",
  };

  const PUTrequestOptions = {
    method: "PUT",
    headers: {
      Authorization: "Bearer 108|Sy6Xipmq6TkiCiCAVCdpRw2wnw2c7xbXwfENHKIE",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ratingAndCertificate),
  };

  /* useEffect(() => {
    
  }, [ratingValue]); */

  const submitHandler = () => {
    fetch(getUrl(), PUTrequestOptions)
      .then((res) => {
        console.log("rating updated");
        return res.json();
      })
      .then(({ data }) => console.log(data));
    closeModal();
  };

  const body = (
    <div className={classes.paper}>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend" variant="h6">
          Оцените, пожалуйста, пройденный курс
        </Typography>
        <Rating
          name="simple-controlled"
          value={ratingValue}
          onChange={changeRatingValue}
          max={10}
        />
      </Box>
      <button onClick={submitHandler}>Submit</button>
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
