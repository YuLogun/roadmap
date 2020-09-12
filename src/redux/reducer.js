import { coursesTestData } from '../components/DeveloperView/coursesTestData';

const initialState = {
  data: [],
  loading: true
};

export const getDataAction = { type: 'GET_DATA' };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return { ...state, data: coursesTestData, loading: false };
    default:
      return state;
  }
};

export default reducer;
