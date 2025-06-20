import axios from "axios";

export const api = axios.create({
  baseURL: 'https://render-api-x3o2.onrender.com/',
})