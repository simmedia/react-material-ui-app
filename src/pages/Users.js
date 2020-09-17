import { SentimentSatisfied } from "@material-ui/icons";
import React, { useState, useEffect } from "react";

import MaterialTableDemo from "../components/Table/Table";

const Users = (props) => {
  const [usersList, setUsersList] = useState([
    // { name: "Stefan", surname: "Simic", birthYear: 1992, birthCity: 63 },
  ]);

  const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    const users = data;
    setUsersList(users);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // const addUser = (e) => {
  //   const newData = [...usersList, e];
  //   setUsersList(newData);
  // };

  return (
    <div>
      <h2>Users</h2>
      <MaterialTableDemo
        sayHello={() => console.log("hello")}
        usersList={usersList}
      />
    </div>
  );
};

export default Users;
