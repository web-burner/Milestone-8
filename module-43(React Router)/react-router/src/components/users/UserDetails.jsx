// import React from 'react';
import { useLoaderData , useNavigate} from "react-router";
const UserDetails = () => {
  const details = useLoaderData();
//   console.log(details);
const navigate = useNavigate()
  return (
    <div>
      <h2>{details.name}</h2>
      <button onClick={()=> navigate(-1)}>Go Back</button>
    </div>
  );
};

export default UserDetails;
