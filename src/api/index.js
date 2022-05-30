import axios from 'axios';

const URL = 'http://localhost:3001';

export const fetchScenarios = () => axios.get(`${URL}/scenarios`);