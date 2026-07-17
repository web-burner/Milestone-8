// import React from 'react';

// import { use } from "react";
import { Link } from "react-router";

const User = ({ user }) => {
  const { id, name, phone } = user;
  console.log(user);
  return (
    <div>
      <h2>Hello From User</h2>
      <p>Name: {name}</p>
      <p>Phone: {phone}</p>
      <Link to={`/user/${id}`}>Show details</Link>
    </div>
  );
};

export default User;
