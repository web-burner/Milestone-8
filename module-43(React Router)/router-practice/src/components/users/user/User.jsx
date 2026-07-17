// import React from 'react';
import { useNavigate } from "react-router";
import "../../../App.css";
const User = ({ user }) => {
  const { id, name, username, email, phone, website } = user;
  const navigate = useNavigate();
  return (
    <div className=" border border-gray-200 rounded-xl p-5">
      <h2>{name}</h2>
      <small>{username}</small>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{website}</p>
      <button
        className=" border px-3 py-2 rounded-xl"
        onClick={() => navigate(`/user/${id}`)}
      >
        Show Details
      </button>
    </div>
  );
};

export default User;

// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//         "street": "Kulas Light",
//         "suite": "Apt. 556",
//         "city": "Gwenborough",
//         "zipcode": "92998-3874",
//         "geo": {
//             "lat": "-37.3159",
//             "lng": "81.1496"
//         }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//         "name": "Romaguera-Crona",
//         "catchPhrase": "Multi-layered client-server neural-net",
//         "bs": "harness real-time e-markets"
//     }
// }
