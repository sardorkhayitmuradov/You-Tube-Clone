import { Avatar } from "@mui/material";
import React from "react";

import { Link } from "react-router-dom";

import "./LeftSide.scss";

const LeftSide = () => {
  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      const res = await fetch("https://reqres.in/api/users?page=2");

      const data = await res.json();
      if (data?.data?.length > 0) {
        setUsers([...data?.data.splice(3, 6)]);
      }
    })();
  }, []);

  return (
    <div className="main-left">
      <p className="main-left__title">Recommended channel</p>

      <ul className="main-left__list">
        {users.map(user => (
          <li key={user.id} className="main-left__item">
            <Link to={ `/channel/${user.id}`} key={user.id} className="main-left__info">
              <Avatar
                className="main-left__users-img"
                src={user.avatar}
                alt={`${user.name}'s img`}
                sx={{ width: 30, height: 30 }}
              />
              {`${user.first_name} ${user.last_name}`}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSide;