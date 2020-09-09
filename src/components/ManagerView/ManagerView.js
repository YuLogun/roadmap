import React from "react";
import { Link } from "react-router-dom";

//components
import Roadmap from "../Roadmap/Roadmap";
import Row from "../Row/Row";

//test data
import { coursesTestData } from "../DeveloperView/coursesTestData";

const ManagerView = () => {
  const vasyaData = coursesTestData.filter((it) => it.employee_id === 0)[0]
    .roadmap;
  const lenaData = coursesTestData.filter((it) => it.employee_id === 1)[0]
    .roadmap;

  console.log(vasyaData);
  return (
    <div>
      <h1>ManagerView</h1>
      <Link to="/roadmap">developer</Link>
      <div>
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
      </div>
    </div>
  );
};

export default ManagerView;
