import axios from "axios";

export const apiClinet = axios.create({
  baseURL: "http://localhost:5000/api",
});
