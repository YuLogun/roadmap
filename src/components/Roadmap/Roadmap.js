import React from "react";

//components
import Technology from "../Technology/Technology";
import MyAppBar from "../AppBar/AppBar";

const Roadmap = ({
  roadmapTitle,
  coursesTestData,
  handleState,
  managerView,
}) => {
  return (
    <div>
      <MyAppBar manager="Иванов И.И." employee="Хаценкевич В.А." />
      <ul className="list">
        <li>
          {roadmapTitle}
          <ul>
            {coursesTestData.map((it) => (
              <Technology
                key={it.id}
                techTitle={it.technology}
                courses={it.courses}
                id={it.id}
                //sendStateToParent={handleState}
                managerView={managerView}
              />
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Roadmap;
