import React, { useState, useEffect } from "react";

const Technology = React.memo(
  ({ techTitle, courses, sendStateToParent, managerView }) => {
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
        //sendStateToParent(newState);
        return newState;
      });
    };

    /* useEffect(() => {
      sendStateToParent(state);
    }, []); */

    return (
      <li>
        {techTitle}
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
              <a href={url}>{name}</a>
            </li>
          ))}
        </ul>
      </li>
    );
  }
);

export default Technology;
