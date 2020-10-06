export function getToken() {
  return localStorage.getItem('authToken');
}

export function getUserRole() {
  return localStorage.getItem('role');
}

export function getNameUser() {
  return localStorage.getItem('user');
}

export function getUsername() {
  return localStorage.getItem('username');
}

export function getTeam() {
  return localStorage.getItem('team');
}

export function getUserId() {
  return localStorage.getItem('userId');
}

export function isAuthorized() {
  if (getToken()) return true;
  else return false;
}

export function storeUserData(userData) {
  localStorage.setItem('authToken', userData.access_token);
  localStorage.setItem('user', userData.user.name);
  localStorage.setItem('role', userData.user.role);
  localStorage.setItem('username', userData.user.username);
  localStorage.setItem('team', userData.user.teams[0]);
  localStorage.setItem('userId', userData.user_id);
}

export function clearUserData() {
  localStorage.clear();
}
