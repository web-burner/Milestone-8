// import React from 'react';

import { Suspense, useState } from "react";
import { useNavigate } from "react-router";
import PostDetails2 from "./PostDetails2";

const Post = ({ post }) => {
  const { id, title, body } = post;
  const navigate = useNavigate();
  const [showInfo, setShowInfo] = useState(false);
  const postPromise = fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => res.json())
  return (
    <div className=" border border-gray-200 rounded-xl p-4">
      <div>
        <p>{title}</p>
        <p>{body}</p>
      </div>
      <button
        onClick={() => navigate(`/post/${id}`)}
        className=" border px-3 py-2 rounded-xl"
      >
        Show Details
      </button>
      <button
        className=" border px-3 py-2 rounded-xl ml-3"
        onClick={() => setShowInfo(!showInfo)}
      >
        {showInfo ? "Hide Info" : "Show Info"}
      </button>
      {
        showInfo && 
        <Suspense fallback={<span>Loading...</span>}>
          <PostDetails2 postPromise={postPromise}></PostDetails2>
        </Suspense>
      }
    </div>
  );
};

export default Post;

// {
//     "userId": 10,
//     "id": 96,
//     "title": "quaerat velit veniam amet cupiditate aut numquam ut sequi",
//     "body": "in non odio excepturi sint eum\nlabore voluptates vitae quia qui et\ninventore itaque rerum\nveniam non exercitationem delectus aut"
// }
