import axios from "axios";

// Axios Instance oluşturuluyor
const axiosInstance = axios.create({
    baseURL: "https://localhost:5173/api", // Backend API adresi
    headers: {
        "Content-Type": "application/json",
    },
});

// Her istekte Authorization başlığını eklemek için bir interceptor kullanın
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token"); // Token localStorage'dan alınır
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
