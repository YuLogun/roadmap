import { coursesTestData } from "../components/DeveloperView/coursesTestData";

const initialState = {};

export const getDataAction = { type: "GET_DATA" };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA":
      return { ...state, coursesTestData };
    default:
      return state;
  }
};

export default reducer;
