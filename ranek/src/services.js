import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000"
})
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
}

export function getCep(cep) {
  return axios.get(`https://viacep.com.br/ws/${cep}/json/`)
}