// src/components/Register.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../actions/userActions";

const Register = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(form.username, form.email, form.password));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" onChange={handleChange} />
      <input type="email" name="email" onChange={handleChange} />
      <input type="password" name="password" onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
