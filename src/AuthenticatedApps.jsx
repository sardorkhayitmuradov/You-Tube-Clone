import React from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate  } from 'react-router-dom'

import Home from "./Components/Pages/Home/Home";
import Channel from "./Components/Pages/Channel/Channel";

import { Button } from "@mui/material";

const AuthenticatedApps = () => {
  const navigate = useNavigate();

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/channel/:channelId" element={<Channel />} />
        <Route
          path="*"
            element={
              <div className="container mt-5">
                <h1>Go To Home</h1>
                <Button onClick={() => navigate("/")} variant="contained">
                  Home pagega qaytish
                </Button>
              </div>
            }
        />
      </Routes>
    </div>
  );
};

export default AuthenticatedApps;