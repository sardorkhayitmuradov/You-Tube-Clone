import React from "react";
import "./Profile.scss";

import { NavLink } from "react-router-dom";
import Arrows from "../../Home/Arrows/Arrows";

import { Context } from "../../../../Context/Videos/Videos";
import { Context as UserContext } from "../../../../Context/Users/Users";

const Profile = () => {
  const { videos } = React.useContext(Context);
  const { users } = React.useContext(UserContext);
  const [video, setVideo] = React.useState([]);

  React.useEffect(() => {
    if (videos.length > 0) {
      setVideo(videos.slice(0, 5));
    }
  }, [videos]);

  return (
    <div className="home__top">
      <div className="home__top-user">
        <NavLink className="home__user" to={"/chanel/" + users[0]?.id}>
          <img
            className="home__user-avatar"
            src={users[0]?.avatar}
            alt="avatar"
          />

          {`${users[0]?.first_name} ${users[0]?.last_name}`}
        </NavLink>

        <Arrows />
      </div>

      <ul className="home__lists">
        {videos.length > 0 &&
          video.map(vid => (
            <NavLink
              className="home__top-item"
              to={"/video/" + vid.id}
              key={vid.id}
            >
              <div className="card">
                <img className="home__top-videos" src={vid.url} alt="video" />
                <div className="card__body">
                  <h4 className="card__title">{vid.title}</h4>
                  <div className="card__body-bottom">
                    <p>80k views · 3 days ago</p>
                    <p>{`${users[0]?.first_name} ${users[0]?.last_name}`}</p>
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
      </ul>
    </div>
  );
};
export default Profile;
