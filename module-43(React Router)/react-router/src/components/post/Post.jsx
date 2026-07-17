// import React from 'react';
import { Suspense } from "react";
import { useState } from "react";
import { Link } from "react-router";
import PostDetails from "./PostDetails";
const Post = ({ post }) => {
  const { id, title } = post;
  const [showInfo, setShowInfo] = useState(false);
  const postPromise = fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  ).then((res) => res.json());
  return (
    <div className=" border-2 border-red-500 rounded-xl p-15">
      <h2>
        {id}. {title}
      </h2>
      <Link to={`/post/${id}`}>show details</Link>
      <button
        className=" border border-gray-400 ml-4 p-2 rounded-md"
        onClick={() => setShowInfo(!showInfo)}
      >
        {showInfo ? "Hide Info" : "Show Info"}
      </button>
      {showInfo && (
        <Suspense fallback={<p>Loading...</p>}>
          <PostDetails postPromise={postPromise}></PostDetails>
        </Suspense>
      )}
    </div>
  );
};

export default Post;
