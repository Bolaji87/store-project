import React, { useState } from "react";
import { authenticateUser } from "../utils";

function Login({ setUser, setIsLogged }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const getUser = async () => {
      const res = await authenticateUser(email, password);
      if (res) {
        setUser(res);
        setIsLogged(true);
      } else {
        setErrorMsg("INVALID EMAIL OR PASSWORD");
      }
      console.log("RESPONSE", res);
    };
    getUser();
  };

  return (
    <form className="login-form">
      <span className="error-span">{errorMsg}</span>
      <label htmlFor="email" className="login-label">
        Email
      </label>
      <input
        type="text"
        name="email"
        className="login-inp"
        placeholder="Email "
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password" className="login-label">
        Password
      </label>
      <input
        type="password"
        name="password"
        className="login-inp"
        placeholder="Password "
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin} type="submit">
        Submit
      </button>
    </form>
  );
}

export default Login;
