import React, { useState } from "react";

//components
import { Typography } from "@material-ui/core";

const Technology = React.memo(({ techTitle, courses, managerView }) => {
  const getState = () => {
    let myState = {};
    for (let item of courses) {
      let key = item.id;
      myState[key] = item.completed;
    }
    return myState;
  };

  const [state, setState] = useState(getState);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setState((state) => {
      const newState = { ...state, [name]: checked };
      return newState;
    });
  };

  return (
    <li>
      <Typography variant="subtitle1">{techTitle}</Typography>
      <ul>
        {courses.map(({ id, name, url }) => (
          <li key={id}>
            <input
              type="checkbox"
              checked={state[id]}
              name={id}
              disabled={managerView ? true : false}
              onChange={handleChange}
            />
            <a href={url}>
              <Typography component="span" variant="subtitle1">
                {name}
              </Typography>
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
});

export default Technology;
