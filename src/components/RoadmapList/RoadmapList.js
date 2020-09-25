import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
//components
import { List, ListItem, ListItemText, Typography } from '@material-ui/core';

//styles
import { useStyles } from './RoadmapList.styles';

const RoadmapList = ({ roadmapsData, setCurrentRoadmap, styles }) => {
  const classes = useStyles();

  const currentRoadmaps = useSelector((state) => state.currentDeveloperRoadmaps);

  /* const [roadmaps, setRoadmaps] = useState([]);
  useEffect(() => setRoadmaps([...roadmaps, roadmapsData.name]), [roadmapsData]); */

  console.log('roadmapData', roadmapsData);

  //Функция для выбора роадмапа в списке
  /* const handleListItemClick = (event, presetName) => {
    setSelectedIndex(presetName);
    setCurrentRoadmap(presetName);
  }; */

  return (
    <div style={styles}>
      <div>
        <Typography variant="h5" className={classes.roadmapListTitle}>
          Roadmaps List:
          {roadmapsData.map((it) => (
            <div key={it}>{it}</div>
          ))}
        </Typography>
      </div>
    </div>
  );
};

export default RoadmapList;
