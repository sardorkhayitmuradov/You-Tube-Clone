import React from "react";

import { NavLink, useParams } from "react-router-dom";

import { Context } from "../../../../../Context/Videos/Videos";
import SearchIcon from "../../../../../Assets/Images/search.svg";
import "./RightSide.scss";

const MiddlePlayer = () => {
  const { videos } = React.useContext(Context);
  const { channelId } = useParams();

  const video = videos[channelId];

  return (
    <div className="main__left">
      <ul className="channel__list">
        <NavLink className="channel__item selected" to={"/channel/" + channelId}>
          Home
        </NavLink>
        <NavLink className="channel__item" to={"/channel/" + channelId}>
          Videos
        </NavLink>
        <NavLink className="channel__item" to={"/channel/" + channelId}>
          Channels
        </NavLink>
        <NavLink className="channel__item" to={"/channel/" + channelId}>
          Discussion
        </NavLink>
        <NavLink className="channel__item" to={"/channel/" + channelId}>
          About
        </NavLink>
        <NavLink className="channel__item" to={"/channel/" + channelId}>
          <img src={SearchIcon} alt="search" />
        </NavLink>
      </ul>

      <div className="middle__left">
        <NavLink to={"/video/" + video?.id}>
          <img className="middle__left-video" src={video?.url} alt="video" />
        </NavLink>
        <div className="middle__left-info">
          <NavLink to={"/video/" + video?.id} className='middle__video-link'>
            <h4 className="middle__video-title">{video?.title}</h4>
          </NavLink>
          <p className="middle__video-comment">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
            ipsam porro quasi, debitis laboriosam rem quos nesciunt perferendis,
            voluptatem aliquid praesentium.
          </p>
          <p className="middle__video-info">
            <span>11k views </span> · <span>6 months ago</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MiddlePlayer;