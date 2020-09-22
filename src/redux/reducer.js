import { setToken } from '../services/Authorization.service';

const BaseUrl = "http://influx-roadmap.herokuapp.com/api";

const GET_DATA = 'GET_DATA';
const UPDATE_COURSES = 'UPDATE_COURSES';
const SET_CURRENT_USER = 'SET_CURRENT_USER';

const initialState = {
  loading: true,
  courses: [ ],
  currentUser: null
};

function errorHandler(res) {
  switch(res.status) {
    case 200: {
      return res.json();
    }
    case 422: {
      alert("Данные введены не корректно");
      break;
    }
    default: {
      debugger;
      alert('Неизвестная ошибка');
    }
  }
  return
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COURSES:
      return { ...state, courses: action.courses, loading: action.loading };
    case GET_DATA:
      return { ...state, data: action.data, loading: action.loading };
    case SET_CURRENT_USER:
      return { ...state, currentUser: action.user };
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

export function login(login, password) {
  const requestParams = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: login,
      password: password
    })
  }

  return (dispatch => {
    //kenny59@example.org
    fetch(BaseUrl + '/login', requestParams)
      .then(res => errorHandler(res))
      .then(data => {
        if (data) {
          setToken(data.access_token);
          dispatch({ type: SET_CURRENT_USER, user: data.user, loading: false });
          debugger;
        }
      })
  })
}


