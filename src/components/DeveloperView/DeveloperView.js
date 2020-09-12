import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getDataAction } from '../../redux/reducer';

//components
import Roadmap from '../Roadmap/Roadmap';
import RolesAppBar from '../RolesAppBar/RolesAppBar';

//test data
//import { coursesTestData } from './coursesTestData';

//styles
import { useStyles } from './DeveloperView.styles';

const DeveloperView = ({ data, loading, getData }) => {
  const classes = useStyles();

  useEffect(() => {
    getData();
  }, [getData]);

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

const mapStateToProps = ({ data, loading }) => {
  return { data, loading };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(getDataAction)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeveloperView);
