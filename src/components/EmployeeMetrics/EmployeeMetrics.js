import React from 'react';
import { useStyles } from './EmployeeMetrics.styles';
import PresetProgress from './PresetProgress/PresetProgress';
import IntensityOfTraining from './IntensityOfTraining/IntensityOfTraining';

const EmployeeMetrics = ({ metrics }) => {
  const classes = useStyles();

  return (
    <>
    <div className="employeeListHeaderBlock">
      <span className="employeeListHeaderTitle">Метрики</span>
    </div>
    <div className="employeeListBlock2">
      <PresetProgress data={metrics.presetProgress} />
      <IntensityOfTraining data={metrics.intensityOfTraining} />
    </div>
    </>
  );
};

export default EmployeeMetrics;