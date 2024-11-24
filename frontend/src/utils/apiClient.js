import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://mernstack-todo-app.vercel.app/api",
});
