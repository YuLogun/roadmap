const GET_DATA = 'GET_DATA';
const GET_MANAGERVIEW_DATA = 'GET_MANAGERVIEW_DATA';

const initialState = {
  data: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return { ...state, data: action.data, loading: action.loading };
    case GET_MANAGERVIEW_DATA:
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

export function getManagerViewData(data) {
  return {
    type: GET_MANAGERVIEW_DATA,
    data,
    loading: false
  }
}