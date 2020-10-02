import { storeUserData, getToken, clearUserData, getUsername } from '../services/Authorization.service';

const BaseUrl = 'http://influx-roadmap.herokuapp.com/api';

const GET_DATA = 'GET_DATA';
const UPDATE_COURSES = 'UPDATE_COURSES';
const SET_CURRENT_USER = 'SET_CURRENT_USER';
const SET_AUTH = 'SET_AUTH';
const SET_DEVELOPER_LIST = 'SET_DEVELOPER_LIST';
const SET_LOADING = 'SET_LOADING';
const SET_CURRENT_DEVELOPER_ROADMAPS = 'SET_CURRENT_DEVELOPER_ROADMAPS';
const SET_PRESETS_LIST = 'SET_PRESETS_LIST';
const UNSET_CURRENT_ROADMAPS = 'UNSET_CURRENT_ROADMAPS';
const SET_CURRENT_PRESET = 'SET_CURRENT_PRESET';

const initialState = {
  loading: true,
  courses: [],
  currentUser: null,
  isAuthorized: false,
  developersList: null,
  currentDeveloperRoadmaps: null,
  presetsList: null,
  currentPreset: null
};

function errorHandler(res) {
  // debugger;
  switch(res.status) {
    case 200: {
      return res.json();
    }
    case 201: {
      alert('Данные сохранены');
      return res.json();
    }
    case 401:
    case 403:
    case 405: {
      alert('Авторизуйтесь');
      // debugger;
      clearUserData();
      document.location.reload();
      break;
    }
    case 422: {
      alert('Данные введены не корректно');
      res.json()
        .then(err => {
          for (let key in err.errors) {
            alert(key + ":" + err.errors[key]);
          }
        })
      break;
    }
    default: {
      alert('Неизвестная ошибка');
      debugger;
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
      return { ...state, isAuthorized: action.isAuth };
    case SET_DEVELOPER_LIST:
      return { ...state, developersList: action.developersList, loading: action.loading };
    case SET_LOADING:
      return { ...state, loading: action.loading };
    case SET_CURRENT_DEVELOPER_ROADMAPS:
      return { ...state, currentDeveloperRoadmaps: action.roadmaps, loading: action.loading };
    case SET_PRESETS_LIST:
      return { ...state, presetsList: action.presetsList }
    case UNSET_CURRENT_ROADMAPS:
      return { ...state, currentDeveloperRoadmaps: action.currentDeveloperRoadmaps }
    case SET_CURRENT_PRESET:
      return { ...state, currentPreset: action.currentPreset }
    default:
      return state;
  }
};

export default reducer;

export function setLoading(isLoading) {
  return (dispatch) => {
    dispatch({
      type: SET_LOADING,
      loading: isLoading
    });
  };
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
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: login,
      password: password
    })
  };

  return (dispatch) => {
    //kenny59@example.org
    fetch(BaseUrl + '/login', requestParams)
      .then((res) => errorHandler(res))
      .then((data) => {
        if (data) {
          storeUserData(data);
          dispatch({ type: SET_CURRENT_USER, user: data.user, isAuth: true, loading: false });
          // debugger;
        }
      });
  };
}

export function setAuthorized() {
  return (dispatch) => {
    dispatch({
      type: SET_AUTH,
      isAuth: true
    });
  };
}

export function unsetRoadmaps() {
  return dispatch => {
    dispatch({
      type: UNSET_CURRENT_ROADMAPS,
      currentDeveloperRoadmaps: null
    })
  }
}

export function getDevelopers() {
  const requestParams = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + getToken()
    }
  };

  return (dispatch) => {
    fetch(BaseUrl + '/companies?filter[manager]=' + getUsername(), requestParams)
    .then(res => errorHandler(res))
    .then(data => {
      // debugger;
      if (data.errors) {
        alert('?');
        debugger;
      } else {
        // debugger;
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
  };

  // debugger;
  return (dispatch) => {
    fetch(BaseUrl + '/roadmaps/' + username, requestParams)
      .then((res) => errorHandler(res))
      .then((data) => {
        // debugger;
        if (data.errors) {
          alert('?');
          debugger;
        } else {
          // debugger;
          dispatch({
            type: SET_CURRENT_DEVELOPER_ROADMAPS,
            roadmaps: data.data,
            loading: false
          });
        }
      });
  };
}

export function getAllPresets() {
  const requestParams = {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + getToken()
    }
  };

  return (dispatch) => {
    fetch(BaseUrl + '/presets', requestParams)
      .then((res) => errorHandler(res))
      .then((data) => {
        if (data.errors) {
          alert('?');
          debugger;
        } else {
          dispatch({
            type: SET_PRESETS_LIST,
            presetsList: data.data
          });
        }
      });
  };
}

export function savePresetOnDeveloper(username, preset) {
  debugger;
  const requestParams = {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + getToken(),
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      employee: username,
      preset: preset
    })
  };

  return (dispatch) => {
    fetch(BaseUrl + '/roadmaps', requestParams)
      .then((res) => errorHandler(res))
      .then((data) => {
        if (data.errors) {
          alert('?');
          debugger;
        } else {
          debugger;
        }
      });
  };
}

export function saveCourse(courseLink) {
  const requestParams = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + getToken()
    },
    body: JSON.stringify({
      source: courseLink
    })
  };

  return (dispatch) => {
    fetch(BaseUrl + '/courses/suggestions', requestParams)
      .then((res) => errorHandler(res))
      .then((data) => {
        if (data.errors) {
          alert('?');
          debugger;
        } else {
          debugger;
        }
      });
  };
}

export function setCurrentPreset(preset) {
  return dispatch => {
    dispatch({
      type: SET_CURRENT_PRESET,
      currentPreset: preset
    })
  }
}

export function sendInvite(email) {
  const requestParams = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + getToken()
    },
    body: JSON.stringify({
      email: email
    })
  }
  return dispatch => {
    fetch(BaseUrl + "/invites", requestParams)
      .then(res => errorHandler(res))
      .then(data => {
        if (data) alert(data.message);
      })
  }
}

export function savePreset(name, description, techList) {
  const requestParams = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + getToken()
    },
    body: JSON.stringify({
      name: name,
      description: "Empty description",
      technologies: techList
    })
  };

  return dispatch => {
    fetch(BaseUrl + "/presets/generation", requestParams)
      .then(res => errorHandler(res))
      .then(data => {
        if(data) debugger;
      })
  }
}

export function register(token, name, username, password, passwordConfirmation) {
  const requestParams = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "invite_token": token,
      "name": name,
      "username": username,
      "password": password,
      "password_confirmation": passwordConfirmation
    })
  };

  return dispatch => {
    fetch(BaseUrl + '/register', requestParams)
      .then(res => errorHandler(res))
      .then(data => {
        if(data) alert(data.message);
      })
  }
}
