const GET_DATA = 'GET_DATA';

const initialState = {
  data: [],
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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