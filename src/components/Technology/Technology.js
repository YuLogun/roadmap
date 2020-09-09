import React, { useState } from "react";

const Technology = ({ techTitle, courses }) => {
  const getState = () => {
    let myState = {};
    for (let item of courses) {
      let key = item.id.toString();
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

  console.log("state", state);

  return (
    <li>
      {techTitle}
      <ul>
        {courses.map(({ id, name, url }) => (
          <li key={id}>
            <input
              type="checkbox"
              value={state[id]}
              name={id}
              onChange={handleChange}
            />
            <a href={url}>{name}</a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Technology;
