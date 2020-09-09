import React from "react";

//components
import Technology from "../Technology/Technology";

//styles
import "./DeveloperView.scss";

//test data
import { coursesTestData } from "./coursesTestData";

const DeveloperView = () => {
  return (
    <div>
      <h1>DeveloperView</h1>
      <div>
        <ul className="list">
          <li>
            MY ROADMAP
            <ul>
              {coursesTestData.map((it) => (
                <Technology
                  techTitle={it.technology}
                  courses={it.courses}
                  id={it.id}
                />
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DeveloperView;
