import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getUsername } from '../../services/Authorization.service';
import { fetchEmployeeMetrics } from '../../api/metrics';
import EmployeeMetrics from './EmployeeMetrics';

const EmployeeMetricsContainer = () => {
  const [metrics, setMetrics] = useState(false);
  const userName = getUsername();

  const testM = null

  useEffect(() => {
    fetchEmployeeMetrics(userName).then((metrics) => setMetrics(metrics));
  }, []);

  return (
    <>
      {
        metrics
        ? <EmployeeMetrics metrics={metrics} />
        : <CircularProgress size={200} />
      }
    </>
  );
};

export default EmployeeMetricsContainer;