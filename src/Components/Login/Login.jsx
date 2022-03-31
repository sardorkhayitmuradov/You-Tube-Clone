import React from "react";

import Logo from '../../Assets/Images/logo.svg'

import { Context as LoginContext } from "../../Context/Login/Authentication";
import { Button } from "@mui/material";

import "./Login.scss";

function Login() {
  const  { setToken }  = React.useContext(LoginContext);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const { user_email, user_password } = evt.target.elements;

    const res = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: user_email.value.trim(),
        password: user_password.value.trim(),
      }),
    });
    const data = await res.json();
    if (data) {
      setToken(data?.token);
    }
  };

  return (
    <main
      className="d-flex justify-content-center"
      style={{
        height: "100vh",
      }}
    >
      <form onSubmit={handleSubmit} className="w-25 mt-5">
        <div className="titleBox my-4">
          <img src={Logo} alt="Site Logo" />
        </div>
        <div className="my-4">
          <input
            type="email"
            className="form-control p-2"
            name="user_email"
            placeholder="Email adress"
            defaultValue="eve.holt@reqres.in"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            className="form-control p-2"
            name="user_password"
            defaultValue="cityslicka"
            placeholder="Password"
          />
        </div>
        <Button
          variant="contained"
          type="submit"
          className="btn btn-primary w-100"
        >
          Log In
        </Button>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <button
            className="btn"
            style={{
              color: "#1DA1F2",
            }}
          >
            Forgot password?
          </button>
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            className="btn"
            style={{
              color: "#1DA1F2",
            }}
          >
            Sign up
          </button>
        </div>
      </form>
    </main>
  );
}

export default Login;
