// import React from 'react';

import { useLoaderData, useNavigate } from "react-router";

const ToDoDetails = () => {
  const todo = useLoaderData();
  const { title, completed } = todo;
  const navigate = useNavigate();
  return (
    <div className=" border border-gray-200 rounded-xl p-4">
      <div>
        <p>{title}</p>
        <p>{completed ? "Completed" : "Not Yet Complete"}</p>
      </div>
      <button
        className=" border px-3 py-2 rounded-xl"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </div>
  );
};

export default ToDoDetails;
