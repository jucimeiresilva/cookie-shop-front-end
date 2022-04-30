//import logo from './logo.svg';
//import './App.css';

import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
//import axios from "axios";

function App() {
  return (
    <div className="App">
      < NavBar >
      < Routes >
        <Route path="/" element={< home />} />
        <Route path="/cadastro" element={< cadastro />} />
        <Route path="/menu" elemente={< menu />} /> 
      </Routes>
      </NavBar>
    </div>
  );
};

export default App;
