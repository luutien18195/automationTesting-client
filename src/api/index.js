import axios from 'axios';

const URL = 'http://localhost:3001';

export const fetchScenarios = (reqParams) => axios.get(`${URL}/scenarios`, {params: reqParams});
