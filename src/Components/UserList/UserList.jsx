import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import User from "./User";
import "bootstrap/dist/css/bootstrap.min.css";

const url = "https://api.github.com/users";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchData = await axios.get(url);
        setUsers(fetchData.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);
  return (
    <div className="d-flex flex-column align-items-center">
      <h1>Github Users</h1>
      {users.map((user) => {
        return <User user={user} key={crypto.randomUUID()} />;
      })}
    </div>
  );
};

export default UserList;
