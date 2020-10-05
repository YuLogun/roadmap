import React, { useEffect, useState } from 'react';
import { useStyles } from './ManagerMetrics.styles';
import { getUsername, getUserId } from '../../services/Authorization.service';
import { fetchManagerMetrics } from '../../api/metrics';
import IntensityOfTraining from './IntensityOfTraining/IntensityOfTraining';

const ManagerMetrics = () => {
  // const classes = useStyles();

  const [metrics, setMetrics] = useState(false);
  const userName = getUsername();
  const userId = getUserId();

  useEffect(async () => {
    const metrics = await fetchManagerMetrics(userId);
    setMetrics(metrics);
  }, [setMetrics, userId]);

  // debugger;

  return (
    <>
      <h1>Метрики</h1>
      {
        metrics ? (<IntensityOfTraining data={metrics.testData1} />) :
        (<></>)
      }
      
      {/* <PieMetric data={metrics.pieMetrics}/> */}
    </>
  )
};

export default ManagerMetrics;