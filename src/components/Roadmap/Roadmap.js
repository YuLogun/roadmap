import React, { useState } from 'react';

//components
import Technology from '../Technology/Technology';
import { Typography } from '@material-ui/core';

//styles
import { useStyles } from './Roadmap.styles';

const Roadmap = ({ roadmapData, managerView, styles }) => {
  const classes = useStyles();

  const roadmapMapper = (roadmapInfo) => {
    let result = {
      slug: roadmapInfo.slug,
      name: roadmapInfo.name,
      levels: []
    };

    for (let devLevelName in roadmapInfo.courses) {
      let currentLevel = {
        name: devLevelName,
        technologies: []
      };
      let currentLevelRawData = roadmapInfo.courses[devLevelName];
      for (let technologyName in currentLevelRawData) {
        currentLevel.technologies.push({
          name: technologyName,
          courses: currentLevelRawData[technologyName]
        });
      }

      result.levels.push(currentLevel);
    }

    return result;
  };

  ////Юля, вот так стало.
  const currentRoadmap = roadmapMapper(roadmapData);

  //Юля, вот так было
  // const [currentRoadmap, setRoadmap] = useState(roadmapMapper(roadmapData));

  console.log(roadmapData.name);
  console.warn(currentRoadmap.name);
  return (
    <div className={classes.container} style={styles}>
      <div className={`container ${styles}`}>
        <ul className={classes.roadmapTitle}>
          {/* <ul className="list"> */}
          <li>
            <Typography variant="h1">{currentRoadmap.name}</Typography>
            <ul className={classes.skillLevelList}>
              {currentRoadmap.levels.map((skillLevel) => (
                <li className={classes.skillLevelBlock}>
                  <span className={classes.skillLevelTitle}>{skillLevel.name}</span>
                  <ul className={classes.technologyTitle}>
                    {skillLevel.technologies.map((technology, index) => (
                      <Technology
                        key={index}
                        techTitle={technology.name}
                        courses={technology.courses}
                        managerView={managerView}
                      />
                    ))}
                  </ul>
                </li>
              ))}
            </ul>

            {/* {roadmapData.courses.Junior.map((it) => (
                <Technology
                  key={it.slug}
                  techTitle={it.name}
                  courses={it.courses}
                  id={it.id}
                  managerView={managerView}
                />
              ))} */}
          </li>
        </ul>
      </div>
    </div>
  );

  // return (
  //   <div className={classes.container}>
  //     <div className={`container ${styles}`}>
  //       <ul className={classes.roadmapTitle}>
  //         {/* <ul className="list"> */}
  //         <li>
  //           <Typography variant="h1">{roadmapTitle}</Typography>
  //           <ul className={classes.technologyTitle}>
  //             {coursesTestData.map((it) => (
  //               <Technology
  //                 key={it.id}
  //                 techTitle={it.technology}
  //                 courses={it.courses}
  //                 id={it.id}
  //                 managerView={managerView}
  //               />
  //             ))}
  //           </ul>
  //         </li>
  //       </ul>
  //     </div>
  //   </div>
  // );
};

export default Roadmap;
