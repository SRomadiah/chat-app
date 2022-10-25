import React from "react";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "./index.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const { currentUser } = useContext(AuthContext);

  console.log(currentUser);
  return (
    // <Register />
    // <Login />
    // <Home />
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
