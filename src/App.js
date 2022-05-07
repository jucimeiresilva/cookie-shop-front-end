import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Register from "./components/FormRegister";
import Login from "./components/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import OrderPage from "./components/OrderPage";


function App() {
  return (
    <div className="App">
      < NavBar />
      < Routes >
        <Route path="/" element={< Home />} />
        <Route path="/register" element={< Register />} />
        <Route path="/menu" element={<Menu/>} /> 
        <Route path="/login" element={<Login/>} />
        <Route path="/order/:id" element={< OrderPage/>} />
      </Routes>
    </div>
  );
};

export default App;
