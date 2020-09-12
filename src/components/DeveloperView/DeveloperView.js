import React from "react";

//components
import Roadmap from "../Roadmap/Roadmap";
import RolesAppBar from "../RolesAppBar/RolesAppBar";

//test data
import { coursesTestData } from "./coursesTestData";

//styles
import { useStyles } from "./DeveloperView.styles";

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
