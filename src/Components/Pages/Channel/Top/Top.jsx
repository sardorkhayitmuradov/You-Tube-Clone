import React from "react";
import Buttons from "../../../Pages/NotChanged/Button/Button";
import NotificationIcon from "../../../../Assets/Images/bell.svg";
import ChannelTopImage from "../../../../Assets/Images/ChannelTopImage.jpg";

import { Context } from "../../../../Context/Users/Users";
import { useParams } from "react-router-dom";

import "./Top.scss";

const Top = () => {
  const { users } = React.useContext(Context);
  const   params    = useParams();

  const User = users.length > 0 && users.find(user => user.id == params.channelId)

  return (
    <div className="channel-topside">
      <img
        className="channel__topside-Image"
        src={ChannelTopImage}
        alt="Channel User Image"
        width='1000px'
      />

      <div className="channel__topside-header">
        <div className="channel__topside-header-left">
          <img
            className="channel__topside-header-user-image"
            src={User?.avatar}
            alt="User Image"
          />
          <div>
            <h3 className="channel__topside-header-user-name">{`${User?.first_name} ${User?.last_name}`}</h3>
            <p className="channel__topside-header-user-subscribed">245K subscribed</p>
          </div>
        </div>
        <div className="channel__topside-header-right">
          <img
            className="channel__topside-header-icon"
            src={NotificationIcon}
            alt="img"
          />
          <Buttons variant="subscribe" title="Subscribe 2.3m" className='channel-btn' />
        </div>
      </div>
    </div>
  );
};

export default Top;