import React from "react";

//components
import Technology from "../Technology/Technology";
import { Typography } from "@material-ui/core";

//styles
import { useStyles } from './Roadmap.styles';

const Roadmap = ({ roadmapTitle, coursesTestData, managerView, styles }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
    {/* <div className={`container ${styles}`}> */}
      <ul className={classes.roadmapTitle}>
      {/* <ul className="list"> */}
        <li>
          <Typography variant="h1">{roadmapTitle}</Typography>
          <ul className={classes.technologyTitle}>
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
