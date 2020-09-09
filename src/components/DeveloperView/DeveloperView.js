import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//components
import Roadmap from "../Roadmap/Roadmap";

//styles
import "./DeveloperView.scss";

//test data
import { coursesTestData } from "./coursesTestData";

const DeveloperView = ({ sendStateToManager }) => {
  const [state, setState] = useState({});

  const handleState = (data) => {
    setState((state) => ({ ...state, ...data }));
  };

  console.log("developer state", state);

  /*   useEffect(() => {
   sendStateToManager(state);
  }, [state]); */

  return (
    <div>
      <h1>DeveloperView</h1>
      <Link to="/">manager</Link>
      <Roadmap
        roadmapTitle={coursesTestData[0].roadmap.roadmap_title}
        coursesTestData={coursesTestData[0].roadmap.roadmap_info}
        handleState={handleState}
      />
    </div>
  );
};

export default DeveloperView;
