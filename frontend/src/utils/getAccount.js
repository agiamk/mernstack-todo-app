import { apiClinet } from "./apiClient";

export const getAccount = async (user, dispatch) => {
  dispatch({ type: "LOGIN_START" });

  try {
    const response = await apiClinet.post("/auth/login", user);
    dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
  } catch (err) {
    dispatch({ type: "LOGIN_ERROR", payload: err });
  }
};
