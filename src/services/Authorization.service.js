export function getToken() {
    localStorage.getItem('authToken');
}

export function setToken(token) {
    localStorage.setItem('authToken', token);
}

export function clearToken() {
    localStorage.removeItem('authToken');
}