import { createContext, useReducer } from "react";
import { AuthReducer } from "./AuthReducer";

const initialState = {
  user: {
    _id: "6734c159dce50233ba223c23",
    username: "taiga",
    email: "km10150301@gmail.com",
    password: "taiga1015",
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(initialState);

//childrenに型定義が必要になるエラーを無効化
// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
