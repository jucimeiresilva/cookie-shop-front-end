//import logo from './logo.svg';
//import './App.css';

import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import axios from "axios";
import Home from "./components/Home";
import Login from "./components/Login";

//import api from "../util/appi.utils";

function App() {
  return (
    <div className="App">
      < NavBar />
      < Routes >
        <Route path="/" element={< Home />} />
        {/* <Route path="/register" element={< register />} />
        <Route path="/menu" elemente={< menu />} />  */}
        <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  );
};

export default App;
