import React from "react";
import { NavLink } from "react-router-dom";

import { Context as VideoContext} from "../../../../Context/Videos/Videos";
import { Context as UsersContext } from "../../../../Context/Users/Users";

import { useParams } from "react-router-dom";

import './Bottom.scss'

const Bottom = () => {
  const { videos } = React.useContext(VideoContext);
  const { users } = React.useContext(UsersContext);
  const [video, setVideo] = React.useState([]);
  const { channelId } = useParams();  /// QARA

  React.useEffect(() => {
    if (videos.length > 0) {
      setVideo(videos.slice(1, 35));
    }
  }, [videos]);

  const findUser = users.find(user => user.id === Number(channelId));
  return (
    <div className="channel-bottomside pt-5">
      <h3 className="channel-bottomside__title">{`${findUser?.first_name} ${findUser?.last_name} videos `}</h3>
      <ul className="channel-bottomside__list d-flex p-0">
        {video.length > 0 &&
          video.map(item => (
            <NavLink
              className="card-box"
              to={"/video/" + item?.id}
              key={item?.id}
            >
              <div className="card">
                <img className="home__top-videos" src={item?.url} alt="video" />
                <div className="card__body">
                  <h4 className="card__title">{item?.title}</h4>
                  <div className="card__body-bottom">
                    <p>80k views · 3 days ago</p>
                    <p>{`${findUser?.first_name} ${findUser?.last_name} `}</p>
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
      </ul>
    </div>
  );
};

export default Bottom;