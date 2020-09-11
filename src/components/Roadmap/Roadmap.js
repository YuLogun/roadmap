import React from "react";

//components
import Technology from "../Technology/Technology";
import { Typography } from "@material-ui/core";

//styles
import "./Roadmap.scss";

const Roadmap = ({ roadmapTitle, coursesTestData, managerView, styles }) => {
  return (
    <div className={`container ${styles}`}>
      {/* <div className="roadmapHeader">
        <span>Roadmap сотрудника</span>
      </div> */}
      <ul className="list">
        <li>
          <Typography variant="h1">{roadmapTitle}</Typography>
          <ul>
            {coursesTestData.map((it) => (
              <Technology
                key={it.id}
                techTitle={it.technology}
                courses={it.courses}
                id={it.id}
                managerView={managerView}
              />
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Roadmap;
