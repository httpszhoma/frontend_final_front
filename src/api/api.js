import axios from "axios";

// Create an Axios instance
const api = axios.create({
    baseURL: "http://localhost:9000",
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    },
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;
