import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import TodoForm from "./components/TodoForm/TodoForm";

function App() {
  const { state } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path={state ? "/" : "login"} element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/todo" element={<TodoForm />} />
      </Routes>
    </Router>
  );
}

export default App;
