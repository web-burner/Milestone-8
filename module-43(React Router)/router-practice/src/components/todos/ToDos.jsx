// import React from 'react';

import { useLoaderData } from "react-router";
import ToDo from "./ToDo";

const ToDos = () => {
  const todos = useLoaderData();

  return (
    <div className=" grid grid-cols-4 gap-4">
      {todos.map((todo) => (
        <ToDo todo={todo} key={todo.id}></ToDo>
      ))}
    </div>
  );
};

export default ToDos;
