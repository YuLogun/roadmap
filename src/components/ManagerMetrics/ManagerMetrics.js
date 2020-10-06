import React from 'react';
import { useStyles } from './ManagerMetrics.styles';
import IntensityOfTraining from './IntensityOfTraining/IntensityOfTraining';
import ManagerPie from './ManagerPie/ManagerPie';
import './ManagerMetrics.styles.scss'


const ManagerMetrics = ({
  metrics
}) => {
  const classes = useStyles();

  return (
    <>
      <div className="employeeListHeaderBlock">
        <span className="employeeListHeaderTitle">Метрики</span>
      </div>
      <div className="employeeListBlock1">
        <IntensityOfTraining data={metrics.testData1} />
        <ManagerPie data={metrics.testData2}/>
      </div>
    </>
  )
};

export default ManagerMetrics;