import React, { useMemo } from 'react';
import CardContent from '@material-ui/core/CardContent';
import { useStyles } from '../ManagerMetrics.styles';
import Card from '@material-ui/core/Card/Card';
import { Bar } from 'react-chartjs-2';


const IntensityOfTraining = ({ data }) => {
  const labels = useMemo(() =>
    data.map(({ name }) => name),
    [data]
  );

  const courseData = useMemo(() =>
  data.map(({ courseIntensity }) => courseIntensity),
  [data]);

  const technologyData = useMemo(() =>
      data.map(({ technologyIntensity }) => technologyIntensity),
    [data]);

  return (
    <Card>
      <CardContent>
        <h4>Интенсивность прохождения</h4>
        <Bar
          data={{
            datasets: [
              {
                label: 'Интенсивность по курсам',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgb(255, 99, 132)',
                data: courseData,
              }
            ],
            labels
          }}
          options={{
            responsive: true,
            legend: {
              position: 'top',
            },
          }}
        />
      </CardContent>
    </Card>
  );
};

export default IntensityOfTraining;