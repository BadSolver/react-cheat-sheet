import axios from "axios";
import React, { useEffect, useState } from "react";

export const User = () => {
  const [users, setUsers] = useState([]);

  // const getUser = async () => {
  //   const url = "https://jsonplaceholder.typicode.com/users";
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   setUsers(data);
  // };

  //   useEffect(() => {
  //     getUser();
  //   }, []);

  const getUser = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await axios.get(url);
    const data = await response.data;
    setUsers(data);
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <ul>
        {users.map((user, index) => {
          return <li key={index}>{user.name}</li>;
        })}
      </ul>
    </div>
  );
};
