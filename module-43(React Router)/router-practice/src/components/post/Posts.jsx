import { useLoaderData, useLocation } from "react-router";
import Post from "./Post";

const Posts = () => {
    const posts = useLoaderData()
    const location = useLocation()
    console.log(location)

  return (
    <div className=" grid grid-cols-3 gap-5">
      {posts.map(post => <Post post={post} key={post.id}></Post>)}
    </div>
  );
};

export default Posts;
