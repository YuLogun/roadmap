import React from 'react';
import { Link } from 'react-router-dom';
import { ROADMAP as ROADMAP_ROUTE } from '../../constants/routes';
import Container from '@material-ui/core/Container';
import EmployeeMetrics from '../EmployeeMetrics/EmployeeMetrics';

const EmployeeMetricsPage = () => (
  <Container>
    <div style={{ textAlign: 'right' }}>
      <Link to={ROADMAP_ROUTE}>Вернуться обратно</Link>
    </div>
    <EmployeeMetrics />
  </Container>
);

export default EmployeeMetricsPage;