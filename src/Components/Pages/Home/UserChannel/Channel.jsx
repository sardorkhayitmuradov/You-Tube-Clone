import React from "react";
import { NavLink } from "react-router-dom";
import UserChannelImg from "../../../../Assets/Images/userchannel.png";

import Buttons from "../../NotChanged/Button/Button";

import { Context } from "../../../../Context/Videos/Videos";
import { Context as UserContext } from '../../../../Context/Users/Users'

import "./Channel.scss";


const Channel = () => {
  const { videos } = React.useContext(Context);
  const { users } = React.useContext(UserContext);
  const [video, setVideo] = React.useState([]);

  React.useEffect(() => {
    if (videos.length > 0) {
      setVideo(videos.slice(1, 35));
    }
  }, [videos]);

  return (
    <div className="navigate">
      <div className="navigate__top">
        <div className="navigate__top-boxes">
          <img
            className="navigate__top-avatar"
            src={UserChannelImg}
            alt="avatar"
          />
          <NavLink to={"/channel/" + users[0]?.id} className="navigate__title">Food & Drink</NavLink>
          <p className="navigate__text">Recommended channel for you</p>
        </div>
        <div className="navigate__top-boxes">
          <Buttons title="Subscribe 2.3m" variant="subscribe" />
        </div>
      </div>
      <ul className="home-userchannel-lists d-flex p-0">
        {videos.length > 0 &&
          video.map(vid => (
            <NavLink
              className="card-box"
              to={"/video/" + vid.id}
              key={vid.id}
            >
              <div className="card">
                <img className="home__top-videos" src={vid.url} alt="video" />
                <div className="card__body">
                  <h4 className="card__title">{vid.title}</h4>
                  <div className="card__body-bottom">
                    <p>Food & Drink</p>
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
      </ul>
    </div>
  );
};

export default Channel;
