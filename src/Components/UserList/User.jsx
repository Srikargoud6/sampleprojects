import React from "react";
import "./User.css";

const User = ({ user }) => {
  const { login, avatar_url, html_url } = user;
  return (
    <div className="d-flex flex-column align-items-center m-4">
      <img src={avatar_url} alt={login} className="image" />
      <a href={html_url} target="_blank" className="link">
        {login}
      </a>
    </div>
  );
};

export default User;
