import React, { useMemo } from 'react';
import CardContent from '@material-ui/core/CardContent';
import { useStyles } from '../EmployeeMetrics.styles';
import Card from '@material-ui/core/Card/Card';
import { Bar } from 'react-chartjs-2';


const IntensityOfTraining = ({ data }) => {
  const labels = useMemo(() => {
    if (data) {
      return data.map(({ name }) => name)
      // [data]
    } else {
      return []
      // return data.map((item) => false), [data]
    }
  });

  const courseData = useMemo(() => {
    if (data) {
      return data.map(({ courseIntensity }) => courseIntensity)
      // [data]
    } else {
      return []
      // return data.map((item) => false), [data]
    }
  });  

  const technologyData = useMemo(() => {
    if (data) {
      return data.map(({ technologyIntensity }) => technologyIntensity)
      // [data]
    } else {
      return []
      // return data.map((item) => false), [data]
    }
  })

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
              },
              {
                label: 'Интенсивность по технологиям',
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgb(54, 162, 235)',
                data: technologyData,
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