import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Form from "./components/AddTodoForm/AddTodoForm";
import Home from "./components/Home/Home";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { state } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path={state ? "/" : "login"} element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/todo" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
