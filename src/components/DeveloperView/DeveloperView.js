import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../../redux/reducer';
import { getDeveloperRoadmap, savePresetOnDeveloper, saveCourse } from '../../redux/reducer';
//services
import { getUsername, getNameUser } from '../../services/Authorization.service';

//components
import Roadmap from '../Roadmap/Roadmap';
import RoadmapList from '../RoadmapList/RoadmapList';
import RolesAppBar from '../RolesAppBar/RolesAppBar';

//styles
import { useStyles } from './DeveloperView.styles';

const DeveloperView = () => {
  const classes = useStyles();

  const loading = useSelector((state) => state.loading);
  const currentRoadmaps = useSelector((state) => state.currentDeveloperRoadmaps);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDeveloperRoadmap(getUsername()));
  }, []);

  /*   const getUserRoadmap = (roadmapId, coursesTestData) => {
    const result = coursesTestData.filter((employee) => {
      return employee.roadmap.roadmap_id === roadmapId;
    })[0];
    return result.roadmap;
  }; */

  /*  const [currentRoadmap, setCurrentRoadmap] = useState(() => getUserRoadmap(111, coursesTestData));
  const [currentRoadmap1, setCurrentRoadmap1] = useState(() =>
    getUserRoadmap(111, coursesTestData)
  );

  const userRoadmapInit = (roadmapId) => {
    let userRoadmap = getUserRoadmap(roadmapId);
    setCurrentRoadmap(userRoadmap);
  };

  const roadmapsTitlesAndIds = coursesTestData.map(
    ({ roadmap: { roadmap_title: name, roadmap_id: id } }) => ({
      name,
      id
    })
  ); */

  console.log(currentRoadmaps);

  return (
    <div>
      <RolesAppBar manager="Иванов И.И." employee={getNameUser()} />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className={classes.container}>
          {/* <RoadmapList
            styles={classes.roadmapList}
            roadmapsData={currentRoadmaps}
            setCurrentRoadmap={(userId, coursesTestData) =>
              userRoadmapInit(userId, coursesTestData)
            }
          /> */}
          {currentRoadmaps ? (
            currentRoadmaps.map((roadmap) => (
              <RoadmapList
                styles={{ top: '100px', position: 'relative' }}
                roadmapsData={roadmap.preset}
              />
            ))
          ) : (
            <div>loading...</div>
          )}
          {currentRoadmaps ? (
            currentRoadmaps.map((roadmap) => (
              <Roadmap
                styles={{ top: '100px', position: 'relative' }}
                roadmapData={roadmap.preset}
              />
            ))
          ) : (
            <div>loading...</div>
          )}
          {/* <Roadmap
            styles={classes.roadmapContainer}
            roadmapTitle={currentRoadmap1.roadmap_title}
            coursesTestData={currentRoadmap1.roadmap_info}
          /> */}
        </div>
      )}
    </div>
  );
};

export default DeveloperView;
