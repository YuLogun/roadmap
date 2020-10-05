import React from 'react';
import Container from '@material-ui/core/Container';
import EmployeeMetricsContainer from '../EmployeeMetrics/EmployeeMetrics.container';

const EmployeeMetricsPage = () => (
  <Container>
    <div style={{ textAlign: 'right' }}>
      <a href="/">Вернуться обратно</a>
    </div>
    <EmployeeMetricsContainer />
  </Container>
);

export default EmployeeMetricsPage;