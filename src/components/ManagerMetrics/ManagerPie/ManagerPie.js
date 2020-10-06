import React from 'react';
import { useStyles } from '../ManagerMetrics.styles';
import Card from '@material-ui/core/Card/Card';
import CardContent from '@material-ui/core/CardContent';
import { Pie } from 'react-chartjs-2';
// import { useStyles } from '../ManagerMetrics.styles';

const ManagerPie = ({
    data
}) => {
    const classes = useStyles();

    const getLabels = (data) => {
        if (data) {
            return data.map(item => item.status);
        } else {
            return [ ]
        }
    }

    const getDatasets = (data) => {
        return [{
            data: data ? data.map(item => item.count) : [],
            backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)']
        }]
    }

    return (
        <Card className={classes.testClass}>
            <CardContent>
                <h4>Активность сотрудников</h4>
                <Pie
                    data={{
                        labels: getLabels(data),
                        datasets: getDatasets(data)
                    }}
                />
            </CardContent>
        </Card>
    )
}

export default ManagerPie;