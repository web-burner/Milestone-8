// import React from 'react';
import { useNavigate } from "react-router";
const User = ({ user }) => {
  const { name, id, phone } = user;
const navigate = useNavigate()
  return (
    <div>
      <h2>{name}</h2>
      <h3>{phone}</h3>
      {/* <Link to={}>Show Details</Link> */}
      <button onClick={()=> navigate(`/user/${id}`)}>Show Details</button>
    </div>
  );
};

export default User;
