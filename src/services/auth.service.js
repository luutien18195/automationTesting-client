import axios from "axios";
import { URL } from "../api/index";

const register = (username, email, password) => {
    return axios.post(`${URL}/signup`, {
        username,
        email,
        password
    });
};

const login = (username, password) => {
    return axios.post(`${URL}/api/auth/signin`, {
        username,
        password
    }).then(res => {
        if(res.data.accessToken) {
            localStorage.setItem('user', JSON.stringify(res.data));
        }
        return res.data;
    });
};

const logout = () => {
    localStorage.removeItem('user');
};

const authService = {
    register,
    login,
    logout
};

export default authService;