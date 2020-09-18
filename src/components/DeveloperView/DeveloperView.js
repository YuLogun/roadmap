import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../../redux/reducer';

//components
import Roadmap from '../Roadmap/Roadmap';
import RoadmapList from '../RoadmapList/RoadmapList';
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

  const getUserRoadmap = (roadmapId, coursesTestData) => {

    const result = coursesTestData.filter(
      (employee) => {
        return employee.roadmap.roadmap_id === roadmapId
      }
    )[0];
    return result.roadmap;
  };

  const [currentRoadmap, setCurrentRoadmap] = useState(() => getUserRoadmap(111, coursesTestData));
  const [currentRoadmap1, setCurrentRoadmap1] = useState(() => getUserRoadmap(111, coursesTestData));

  const userRoadmapInit = (roadmapId) => {
    let userRoadmap = getUserRoadmap(roadmapId);
    setCurrentRoadmap(userRoadmap);
  };

  console.log(data);

  const roadmapsTitlesAndIds = data.map(({ roadmap: { roadmap_title: name, roadmap_id: id } }) => ({
    name,
    id
  }));

  return (
    <div>
      <RolesAppBar manager="Иванов И.И." employee="Хаценкевич В.А." />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className={classes.container}>
          <RoadmapList
            styles={classes.roadmapList}
            roadmapsData={roadmapsTitlesAndIds}
            setCurrentRoadmap={(userId, coursesTestData) => userRoadmapInit(userId, coursesTestData)}
          />
          <Roadmap
            styles={classes.roadmapContainer}
            roadmapTitle={currentRoadmap1.roadmap_title}
            coursesTestData={currentRoadmap1.roadmap_info}
          />
        </div>
      )}
    </div>
  );
};

export default DeveloperView;
