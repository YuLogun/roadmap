import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import ProgressBar from '../ProgressBar/ProgressBar';
import Card from '@material-ui/core/Card/Card';
import { useStyles } from '../EmployeeMetrics.styles';

const PresetProgress = ({ data = [] }) => {
  const classes = useStyles();

  return (
    <Card style={{ marginBottom: 20 }}>
      <CardContent>
        <h4>Прогресс по пресетам</h4>
        {
          data.map(({
             name,
             shareOfCompletedCoursesPercent,
             shareOfCompletedTechnologiesPercent
          }) => (
            <div key={name} className={classes.presetProgressItem}>
              <p className={classes.presetProgressTitleItem}>{name}</p>
              <p className={classes.progressBarLabel}>По курсам:</p>
              <ProgressBar valuePercent={shareOfCompletedCoursesPercent} />
              <p className={classes.progressBarLabel}>По технологиям:</p>
              <ProgressBar valuePercent={shareOfCompletedTechnologiesPercent} />
            </div>
          ))
        }
      </CardContent>
    </Card>
  );
};

export default PresetProgress;