import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import CardContent from '@material-ui/core/CardContent';
import ProgressBar from './ProgressBar/ProgressBar';
import Card from '@material-ui/core/Card';
import { fetchPresetProgress } from '../../api/metrics/index';
import { useStyles } from './EmployeeMetrics.styles';

const EmployeeMetrics = () => {
  const [metrics, setMetrics] = useState([]);
  const classes = useStyles();

  useEffect(async () => {
    const metrics = await fetchPresetProgress(4);
    setMetrics(metrics);
  }, [setMetrics]);

  return (
    <>
      <h1 className={classes.title}>Метрики</h1>
      <Card>
        <CardContent>
          <h4>Прогресс по пресетам</h4>
          {
            metrics.length && metrics.map(({
              name,
              shareOfCompletedCoursesPercent,
              shareOfCompletedTechnologiesPercent
            }) => (
              <div className={classes.presetProgressItem}>
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
    </>
  );
};

export default EmployeeMetrics;