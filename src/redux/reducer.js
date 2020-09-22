const GET_DATA = 'GET_DATA';
const UPDATE_COURSES = 'UPDATE_COURSES';

const initialState = {
  loading: true,
  courses: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COURSES:
      return { ...state, courses: action.courses, loading: action.loading };
    case GET_DATA:
      return { ...state, data: action.data, loading: action.loading };
    default:
      return state;
  }
};

export default reducer;

export function getData(data) {
  return {
    type: GET_DATA,
    data,
    loading: false
  };
}

export function getDataFromAPI(token) {
  return (dispatch) => {
    fetch('http://influx-roadmap.herokuapp.com/api/courses', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => res.json())
      .then((r) => r.data)
      .then((res) => {
        dispatch({ type: UPDATE_COURSES, courses: res, loading: false });
      });
  };
}
