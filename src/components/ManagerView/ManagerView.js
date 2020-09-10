import React, { useState } from "react";
import { Link } from "react-router-dom";

//components
import Roadmap from "../Roadmap/Roadmap";
import Row from "../Row/Row";

//test data
import { coursesTestData } from "../DeveloperView/coursesTestData";
import UserList from "../UserList/UserList";

//styles
import './ManagerView.scss';

const ManagerView = () => {
  const vasyaData = coursesTestData.filter((it) => it.employee_id === 0)[0]
    .roadmap;
  const lenaData = coursesTestData.filter((it) => it.employee_id === 1)[0]
    .roadmap;

  console.log(vasyaData);

  const userRoadmapInit = (userId) => {
    let userRoadmap = getUserRoadmap(userId);
    setRoadmap(prevState => userRoadmap)
    // debugger;
  }

  const getUserRoadmap = (userId) => {
    const result = coursesTestData.filter(roadmap => roadmap.employee_id === userId)[0];
    return result.roadmap;
  }

  const[currentRoadmap, setRoadmap] = useState(getUserRoadmap(0));



  const getUsersData = () => {
    return [
      {
          id: 0,
          name: "Вася"
      },
      {
          id: 1,
          name: "Петя"
      },
      {
          id: 2,
          name: "Юля"
      },
      {
          id: 3,
          name: "Рита"
      },
    ]
  }

  return (
    <div>
      <h1>ManagerView</h1>
      <Link to="/roadmap">developer</Link>
      <div className="adminPanelContainer">
        <UserList
          usersData={getUsersData()}
          currentUserId={userId => userRoadmapInit(userId)}
        />
        <Roadmap
          roadmapTitle={currentRoadmap.roadmap_title}
          coursesTestData={currentRoadmap.roadmap_info}
          handleState={() => {}}
          managerView
        />
      </div>
      
      {/* <div>
        <Row>
          <div>NAME</div>
          <div>ROADMAP</div>
        </Row>
        <Row>
          <div>Vasya</div>
          <Roadmap
            roadmapTitle={vasyaData.roadmap_title}
            coursesTestData={vasyaData.roadmap_info}
            handleState={() => {}}
            managerView
          />
        </Row>
        <Row>
          <div>Lena</div>
          <Roadmap
            roadmapTitle={lenaData.roadmap_title}
            coursesTestData={lenaData.roadmap_info}
            handleState={() => {}}
            managerView
          />
        </Row>
      </div> */}
    </div>
  );
};

export default ManagerView;
