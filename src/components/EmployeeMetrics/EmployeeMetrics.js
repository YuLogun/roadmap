import React from 'react';
import { useStyles } from './EmployeeMetrics.styles';
import PresetProgress from './PresetProgress/PresetProgress';
import IntensityOfTraining from './IntensityOfTraining/IntensityOfTraining';

const EmployeeMetrics = ({ metrics }) => {
  const classes = useStyles();

  return (
    <>
      <h1 className={classes.title}>Метрики</h1>
      <PresetProgress data={metrics.presetProgress} />
      <IntensityOfTraining data={metrics.intensityOfTraining} />
    </>
  );
};

export default EmployeeMetrics;