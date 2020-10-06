import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getUsername, getUserId } from '../../services/Authorization.service';
import { fetchManagerMetrics } from '../../api/metrics';
import ManagerMetrics from './ManagerMetrics';
import './ManagerMetrics.styles.scss'

const EmployeeMetricsContainer = () => {
  const [metrics, setMetrics] = useState(false);
  const userId = getUserId();
  const userName = getUsername();

  useEffect(() => {
    const metrics = fetchManagerMetrics(userId, userName).then(() => setMetrics(metrics));
    // const metrics = await fetchEmployeeMetrics(userName);
  }, []);

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