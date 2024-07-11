import axios from "axios";

//you could either add your backend api's link in constants.js and import it here
import { BASE_URL } from "./constants";

//i've added my api's link as an environment variable to the .env file too

const axiosInstance = axios.create({
    baseURL: process.env.API_BASE_URL,
    timeout: 15000,
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true
});

axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("token");
        if( accessToken ){
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
