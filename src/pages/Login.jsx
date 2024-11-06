import React from "react";

function Login() {
  return (
    <form className="login-form" action="">
      <span className="error-span">
        <label htmlFor="email" className="login-label">
          Email
        </label>
        <input
          type="text"
          name="email"
          className="login-inp"
          placeholder="Email "
        />
        <label htmlFor="password" className="login-label">
          Password
        </label>
        <input
          type="password"
          name="password"
          className="login-inp"
          placeholder="Email "
        />
        <button type="submit">Submit</button>
      </span>
    </form>
  );
}

export default Login;
