import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getUsername, getUserId } from '../../services/Authorization.service';
import { fetchManagerMetrics } from '../../api/metrics';
import ManagerMetrics from './ManagerMetrics';
import './ManagerMetrics.styles.scss'

const EmployeeMetricsContainer = () => {
  const [metrics, setMetrics] = useState(false);
  const userId = getUserId();
//   debugger;
  const userName = getUsername();

  useEffect(async () => {
    const metrics = await fetchManagerMetrics(userId, userName);
    // const metrics = await fetchEmployeeMetrics(userName);
    setMetrics(metrics);
  }, [setMetrics, userId]);

  return (
    <div className="wideScreenList">
      {
        metrics
        ? <ManagerMetrics metrics={metrics} />
        : <CircularProgress size={200} />
      }
    </div>
  );
};

export default EmployeeMetricsContainer;