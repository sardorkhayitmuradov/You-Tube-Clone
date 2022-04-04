import React from "react";
import LikeImg from "../../../../Assets/Images/like.svg";
import Dislike from "../../../../Assets/Images/dislike.svg";
import Share from "../../../../Assets/Images/share.svg";
import threeDots from "../../../../Assets/Images/dotsvideo.svg";
import TitleImg from '../../../../Assets/Images/titleimg.jpg'

import { Context as VideoContext } from "../../../../Context/Videos/Videos"
import Buttons from "@mui/material/Button/Button";
import Avatar from "@mui/material/Avatar/Avatar";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

import "./Channel.scss";
function Player() {
  const  { videoId }   = useParams();
  const { videos } = React.useContext(VideoContext);

  
  const findVideo = videos.find(video => video?.id == Number(videoId))
  console.log(videoId)
 
  return (
    <div className="video__info">
      <div className="video__player">
        <img className="video__info-video" src={findVideo?.url} alt="video"/>
        <div className="video__player-body">
          <h2 className="video__player-title">{findVideo?.title}</h2>
          <div className="video__player-video-info">
            <p className="video__player-views">123k views</p>
            <div>
              <ul className="video__player-list">
                <li>
                  <button className="video__player-btns">
                    <img
                      className="video__player-btns-icon"
                      src={LikeImg}
                      alt=""
                    />
                    <p  className="video-player-btns-content">435k</p>
                  </button>
                </li>

                <li>
                  <button className="video__player-btns">
                    <img
                      className="video__player-btns-icon"
                      src={Dislike}
                      alt=""
                    />
                    <p className="video-player-btns-content">123k</p>
                  </button>
                </li>

                <li>
                  <button className="video__player-btns">
                    <img
                      className="video__player-btns-icon"
                      src={Share}
                      alt=""
                    />
                    <p  className="video-player-btns-content">Share</p>
                  </button>
                </li>
                <img className="video__player-more-btn" src={threeDots} alt="" />
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="video__info-bottom">
        <div className="video__info-user-box">
          <NavLink to={"/"}>
            <Avatar
              className="video__info-user-img"
              alt="Remy Sharp"
              src={TitleImg}
              sx={{ width: 80, height: 80 }}
              />
          </NavLink>
            <div className="video__info-userinfo">
              <NavLink to={"/"} className="video__info-title">
                <h3 className="video__info-username">Food & Drink</h3>
              </NavLink>
              <p className="video__info-published">Published on 14 Jun 2019</p>
              <p className="video__info-bio">
                A successful marketing plan relies heavily on the pulling-power of
                advertising copy. Writing result-oriented ad copy is difficult, as
                it must appeal to, entice, and convince consumers to take action.
                There is no magic formula to write perfect ad copy; it is based on
                a number of factors, including ad placement, demographic, even the
                consumer's mood when they see your ad.{" "}
              </p>
              <button className="video__info-show-btn">Show more</button>
            </div>
        </div>

        <Buttons variant="subscribe video-btn" title="Subscribe 2.3m" />
      </div>
    </div>
  );
}

export default Player;