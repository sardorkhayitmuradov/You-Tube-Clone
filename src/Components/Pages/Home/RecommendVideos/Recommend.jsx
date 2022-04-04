import React from "react";
import Arrows from "../../Home/Arrows/Arrows";

import { Context } from "../../../../Context/Videos/Videos";

import { NavLink } from "react-router-dom";
import "./Recommend.scss";
import "../UserProfile/Profile.scss";


const Recommended = () => {
  const { videos, setVideos } = React.useContext(Context);
  const [video, setVideo] = React.useState([]);

  React.useEffect(() => {
    if (videos.length > 0) {
      setVideo(videos.slice(5, 21));
    }
  }, [videos]);
  return (
    <div className="recommend">
      <div className="recommend__top">
        <h2 className="recommend__title">Recommended</h2>
      </div>
      <ul className="home-recommend-lists d-flex p-0">
        {video.length > 0 &&
          video.map(vid => (
            <NavLink
              key={vid.id}
              to={"/video/" + vid.id}
              className="recommend__item"
            >
              <div className="card">
                <img className="recommend__videos" src={vid.url} alt="video" />
                <div className="card__body">
                  <h4 className="card__title">{vid.title}</h4>
                  <div className="card__body-bottom">
                    <p>80k views · 3 days ago</p>
                    <p>Gussie French</p>
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
      </ul>
    </div>
  );
};

export default Recommended;

