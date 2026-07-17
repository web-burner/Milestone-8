// import React from 'react';

import { useNavigate } from "react-router";

const ToDo = ({ todo }) => {
  // console.log(todo)
  const { id, title, completed } = todo;
  const navigate = useNavigate();
  return (
    <div className=" border border-gray-200 rounded-xl p-4">
      <div className=" mb-5">
        <p>{title}</p>
        <p>{completed ? "completed" : "Not Yet Complete"}</p>
      </div>
      <button
        onClick={() => navigate(`/todo/${id}`)}
        className=" border px-3 py-2 rounded-xl"
      >
        Show Details
      </button>
    </div>
  );
};

export default ToDo;

// {
//     "userId": 10,
//     "id": 194,
//     "title": "sed ut vero sit molestiae",
//     "completed": false
// }
