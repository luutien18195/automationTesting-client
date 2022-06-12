import axios from 'axios';
const userSession = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : {};
axios.defaults.headers.common['x-access-token'] = userSession.accessToken;
export const URL = 'http://localhost:3001';
export const fetchScenarios = (reqParams) => axios.get(`${URL}/scenarios`, {params: reqParams});
