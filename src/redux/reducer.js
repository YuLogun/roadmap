import { storeUserData, getToken } from '../services/Authorization.service';

const BaseUrl = "http://influx-roadmap.herokuapp.com/api";

const GET_DATA = 'GET_DATA';
const UPDATE_COURSES = 'UPDATE_COURSES';
const SET_CURRENT_USER = 'SET_CURRENT_USER';
const SET_AUTH = 'SET_AUTH';
const SET_DEVELOPER_LIST = 'SET_DEVELOPER_LIST';
const SET_LOADING = 'SET_LOADING';
const SET_CURRENT_DEVELOPER_ROADMAPS = 'SET_CURRENT_DEVELOPER_ROADMAPS';

const initialState = {
  loading: true,
  courses: [ ],
  currentUser: null,
  isAuthorized: false,
  developersList: null,
  currentDeveloperRoadmaps: null
};

function errorHandler(res) {
  // debugger;
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
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COURSES:
      return { ...state, courses: action.courses, loading: action.loading };
    case GET_DATA:
      return { ...state, data: action.data, loading: action.loading };
    case SET_CURRENT_USER:
      return { ...state, currentUser: action.user, isAuthorized: action.isAuth };
    case SET_AUTH:
      return { ...state, isAuthorized: action.isAuth }
    case SET_DEVELOPER_LIST:
      return { ...state, developersList: action.developersList, loading: action.loading }
    case SET_LOADING:
      return { ...state, loading: action.loading }
    case SET_CURRENT_DEVELOPER_ROADMAPS:
      return { ...state, currentDeveloperRoadmaps: action.roadmaps, loading: action.loading }
    default:
      return state;
  }
};

export default reducer;

export function setLoading(isLoading) {
  return dispatch => {
    dispatch({
      type: SET_LOADING,
      loading: isLoading
    })
  }
}

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
          storeUserData(data);
          dispatch({ type: SET_CURRENT_USER, user: data.user, isAuth: true, loading: false });
          // debugger;
        }
      })
  })
}

export function setAuthorized() {
  return (dispatch) => {
      dispatch({
        type: SET_AUTH,
        isAuth: true,
      })
    }
}

// export function savePreset(username, preset) {
//   const setPresetRequestOptions = {
//     method: 'POST',
//     headers: {
//       Authorization: 'Bearer ' + userToken
//     },
//     body: JSON.stringify({
//       employee: username,
//       preset: preset
//     })
//   };
// }

export function getDevelopers() {
  const requestParams = {
    method: 'GET',
    headers: {
      "Authorization": "Bearer " + getToken()
    }
  }

  return dispatch => {
    fetch(BaseUrl + '/employees', requestParams)
    .then(res => errorHandler(res))
    .then(data => {
      if (data.errors) {
        alert('?');
        debugger;
      } else {
        dispatch({
          type: SET_DEVELOPER_LIST,
          developersList: data.data,
          loading: false
        })
      }
    })
  }
}

export function getDeveloperRoadmap(username) {
  // debugger;
  const requestParams = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + getToken()
    }
  }

  return (dispatch) => {
    fetch(BaseUrl + '/roadmaps/' + username, requestParams)
      .then(res => errorHandler(res))
      .then(data => {
        // debugger;
        if (data.errors) {
          alert('?');
          // debugger;
        } else {
          // debugger;
          dispatch({
            type: SET_CURRENT_DEVELOPER_ROADMAPS,
            roadmaps: data.data,
            loading: false
          })
        }
      })
  }
}


