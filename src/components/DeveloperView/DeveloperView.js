import React from "react";

//components
import Roadmap from "../Roadmap/Roadmap";
import { makeStyles } from "@material-ui/core/styles";
import RolesAppBar from "../RolesAppBar/RolesAppBar";

//test data
import { coursesTestData } from "./coursesTestData";

//styles
import "./DeveloperView.scss";

const useStyles = makeStyles(() => ({
  roadmapContainer: {
    top: "56px",
    position: "relative",
    border: "1px solid gray",
    borderTop: "none",
    padding: " 1em 2em",
  },
}));

const DeveloperView = () => {
  const classes = useStyles();
  return (
    <div>
      <RolesAppBar manager="Иванов И.И." employee="Хаценкевич В.А." />
      <Roadmap
        styles={classes.roadmapContainer}
        roadmapTitle={coursesTestData[0].roadmap.roadmap_title}
        coursesTestData={coursesTestData[0].roadmap.roadmap_info}
      />
    </div>
  );
};

export default DeveloperView;
