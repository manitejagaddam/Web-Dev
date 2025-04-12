import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosError } from 'axios';



const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  
});

interface ErrorResponse {
  message?: string;
  error?: string;
}

api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem('adminToken');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ErrorResponse>) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('adminToken');
      window.location.href = '/admin/login';
    }
    return Promise.reject(error);
  }
);

export default api;