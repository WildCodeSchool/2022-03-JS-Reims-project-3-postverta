import axios from "axios";

const backendCall = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000",
});

export default backendCall;
