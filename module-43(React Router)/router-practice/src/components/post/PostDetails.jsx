
import { useState } from "react";
import { Navigate, useLoaderData, useNavigate , useParams} from "react-router";

const PostDetails = () => {
  const post = useLoaderData();
  const navigate = useNavigate();
      const params = useParams()
    console.log(params)
    const [visitHome, setVisitHome] = useState(false)
    if(visitHome){
      return <Navigate to={'/'}></Navigate>
    }
  return (
    <div className=" border border-gray-200 rounded-xl p-4">
      <div>
        <p>{post.title}</p>
        <p>{post.body}</p>
      </div>
      <button
        className=" border px-3 py-2 rounded-xl"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
      <button onClick={()=> setVisitHome(!visitHome)}>Visit Home</button>
    </div>
  );
};

export default PostDetails;
