import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../../redux/reducer';

//components
import Roadmap from '../Roadmap/Roadmap';
import RolesAppBar from '../RolesAppBar/RolesAppBar';

//test data
import { coursesTestData } from './coursesTestData';

//styles
import { useStyles } from './DeveloperView.styles';

const DeveloperView = () => {
  const classes = useStyles();

  //redux hooks
  const data = useSelector((state) => state.data);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData(coursesTestData));
  }, []);

  console.log(data);

  return (
    <div>
      <RolesAppBar manager="Иванов И.И." employee="Хаценкевич В.А." />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Roadmap
          styles={classes.roadmapContainer}
          roadmapTitle={data[0].roadmap.roadmap_title}
          coursesTestData={data[0].roadmap.roadmap_info}
        />
      )}
    </div>
  );
};

export default DeveloperView;
