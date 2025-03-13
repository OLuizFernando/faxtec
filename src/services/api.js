import axios from "axios";

const api = axios.create({
  baseURL: "https://faxtec-api.vercel.app",
});

export default api;
