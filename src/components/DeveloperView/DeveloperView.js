import React from "react";

//components
import Roadmap from "../Roadmap/Roadmap";
import MyAppBar from "../AppBar/AppBar";

//styles
import "./DeveloperView.scss";

//test data
import { coursesTestData } from "./coursesTestData";

const DeveloperView = () => {
  return (
    <div>
      <MyAppBar manager="Иванов И.И." employee="Хаценкевич В.А." />
      <Roadmap
        roadmapTitle={coursesTestData[0].roadmap.roadmap_title}
        coursesTestData={coursesTestData[0].roadmap.roadmap_info}
      />
    </div>
  );
};

export default DeveloperView;
