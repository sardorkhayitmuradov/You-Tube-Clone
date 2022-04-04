import React from "react";
import { NavLink } from "react-router-dom";
import { Switch } from "@mui/material";
import { Context as VideoContext } from "../../../../Context/Videos/Videos";
import { useParams } from "react-router-dom";

import "./LeftSide.scss";

function LeftVerticalSide() {
  const { videos } = React.useContext(VideoContext);

  const { videoId } = useParams();

  const [video, setVideo] = React.useState([]);
  
  React.useEffect(() => {
    if (videos.length > 0) {
      const filterVideo = videos.filter(video => video.id !== Number(videoId));
      setVideo(filterVideo.slice(50, 55));
    }
  }, [videoId, videos]);

  return (
    <div className="verticalVideo ps-0">
      <div className="d-flex align-items-center justify-content-between">
        <h3>Next</h3>
        <Switch />
      </div>
      <ul className="list-unstyled p-0 verticalVideo__list">
        {videos.length > 0 &&
          videos.map((video) => (
            <li key={video.id} className="verticalVideo__item">
              <NavLink className={"videos__link"} to={`/video/${video.id}`}>
                <img
                  className="videos__img"
                  src={video.url}
                  alt={video.title}
                  width={250}
                  height={150}
                />
                <h4 className={`videos__title`}>{video.title}</h4>
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default LeftVerticalSide;