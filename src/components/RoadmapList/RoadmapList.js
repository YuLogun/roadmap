import React, { useState } from 'react';

//components
import { List, ListItem, ListItemText, Typography } from '@material-ui/core';

//styles
import { useStyles } from './RoadmapList.styles';

const RoadmapList = ({ roadmapsData, setCurrentRoadmap, styles }) => {
  const classes = useStyles();

  const [selectedIndex, setSelectedIndex] = useState(111);

  //Функция для выбора роадмапа в списке
  const handleListItemClick = (event, userId) => {
    setSelectedIndex(userId);
    setCurrentRoadmap(userId);
  };

  return (
    <div className={styles}>
      <div>
        <Typography variant="h5" className={classes.roadmapListTitle}>
          Roadmaps List:
        </Typography>
        {/* <List component="nav">
          {roadmapsData.map((roadmap, index) => (
            <ListItem
              button
              selected={selectedIndex === roadmap.id}
              key={index}
              onClick={(e) => handleListItemClick(e, roadmap.id)}
            >
              <ListItemText primary={roadmap.name} />
            </ListItem>
          ))}
        </List> */}
      </div>
    </div>
  );
};

export default RoadmapList;
