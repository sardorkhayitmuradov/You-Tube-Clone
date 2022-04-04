import React from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate  } from 'react-router-dom'


import Home from "./Components/Pages/Home/Home";
import Channel from "./Components/Pages/Channel/Channel";
import Player from './Components/Pages/Video Player/VideoPlayer';

import { Context as VideoContext } from "./Context/Videos/Videos"

import { Button } from "@mui/material";

const AuthenticatedApps = () => {
  const navigate = useNavigate();


  const { setVideos } = React.useContext(VideoContext);

  React.useEffect(() => {
    (async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/photos");

      const data = await res.json();
      if (data?.length > 0) {
        const video = data.slice(0, 35);
        setVideos([...video]);
      }
    })();
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/channel/:channelId" element={<Channel />} />
        <Route path="/video/:videoId" element={<Player />} />
        <Route
          path="*"
            element={
              <div className="container mt-5">
                <h1>Sorry , We are working on this page !</h1>
                <Button onClick={() => navigate("/")} variant="contained">
                  Back
                </Button>
              </div>
            }
        />
      </Routes>
    </div>
  );
};

export default AuthenticatedApps;