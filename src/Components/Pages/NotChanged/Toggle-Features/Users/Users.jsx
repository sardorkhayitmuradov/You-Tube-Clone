import React from "react";
import "./Users.scss";
import { Link } from "react-router-dom";
import { Context } from "../../../../../Context/Users/Users";

const Users = () => {
  const { users, setUsers } = React.useContext(Context);

  React.useEffect(() => {
    (async () => {
      const res = await fetch("https://reqres.in/api/users");

      const data = await res.json();
      if (data?.data?.length > 0) {
        setUsers([...data?.data]);
      }
    })();
  }, []);

  return (
    <div className="users">
      <h2 className="users__title">Subscriptions</h2>
      <ul className="users__list">
        {users.map(user => (
          <Link to={ `/channel/${user.id}`} key={user.id} className="users__item">
            <img
              className="users__img"
              src={user.avatar}
              alt={`${user.name}'s img`}
            />
            {`${user.first_name} ${user.last_name}`}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Users;
