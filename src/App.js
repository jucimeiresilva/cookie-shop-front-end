//import logo from './logo.svg';
//import './App.css';

import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import axios from "axios";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      < NavBar />
      < Routes >
        <Route path="/" element={< Home />} />
        {/* <Route path="/cadastro" element={< cadastro />} />
        <Route path="/menu" elemente={< menu />} />  */}
      </Routes>
    </div>
  );
};

export default App;
