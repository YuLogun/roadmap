import React from "react";

//components
import Roadmap from "../Roadmap/Roadmap";
import { Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//test data
import { coursesTestData } from "./coursesTestData";

//styles
import "./DeveloperView.scss";

const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    position: "fixed",
    zIndex: 100,
    opacity: 1,
    background: "#fafafa",
    width: "100%",
    border: "1px solid gray",
  },
  roleContainer: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  role: {
    paddingLeft: "0.25em",
  },
  roadmapContainer: {
    top: "56px",
    position: "relative",
    border: "1px solid gray",
    borderTop: "none",
    padding: " 1em 2em",
  },
}));

const DeveloperView = ({ employee, manager }) => {
  const classes = useStyles();
  return (
    <div>
      {/* <MyAppBar manager="Иванов И.И." employee="Хаценкевич В.А." /> */}
      <Toolbar className={classes.header}>
        <Typography variant="body1" className={classes.roleContainer}>
          <b>Сотрудник: </b>
          <span className={classes.role}>{employee}</span>
        </Typography>
        <Typography variant="body1" className={classes.roleContainer}>
          <b>Менеджер:</b>
          <span className={classes.role}>{manager}</span>
        </Typography>
      </Toolbar>
      <Roadmap
        styles={classes.roadmapContainer}
        roadmapTitle={coursesTestData[0].roadmap.roadmap_title}
        coursesTestData={coursesTestData[0].roadmap.roadmap_info}
      />
    </div>
  );
};

export default DeveloperView;
