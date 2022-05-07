import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiUtils from "../util/api.utils";
import "./FormRegister.css";

const FormRegister = () => {
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [adress, setAdress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const resetForm = () => {
    setName("");
    setBirthDate("");
    setAdress("");
    setPhone("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiUtils.signup({
        name,
        birthDate,
        adress,
        phone,
        email,
        password,
      });
      resetForm();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="titulo">
        <h5>Register here!</h5>
      </div>

      <div className="column">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="birthDate">BirthDate</label>
            <input
              id="birthDate"
              type="birthDate"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="adress">Adress</label>
            <input
              id="adress"
              type="adress"
              value={adress}
              onChange={(e) => setAdress(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              type="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="button">Create</button>
        </form>
      </div>
    </>
  );
};

export default FormRegister;
