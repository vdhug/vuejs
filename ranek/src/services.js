import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://rankeapilocal.local/wp-json/api"
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = window.localStorage.token;
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
)

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  },
  post(endpoint, obj) {
    return axiosInstance.post(endpoint, obj);
  },
  put(endpoint, obj) {
    return axiosInstance.put(endpoint, obj);
  },
  delete(endpoint) {
    return axiosInstance.delete(endpoint);
  },
  login(body) {
    return axios.post("http://rankeapilocal.local/wp-json/jwt-auth/v1/token", body);
  },
  validateToken() {
    return axios.post("http://rankeapilocal.local/wp-json/jwt-auth/v1/token/validate");

  }
}

export function getCep(cep) {
  return axios.get(`https://viacep.com.br/ws/${cep}/json/`)
}