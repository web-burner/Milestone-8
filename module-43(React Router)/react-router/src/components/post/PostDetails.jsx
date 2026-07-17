// import React from 'react';
import { use } from 'react';
import {useLoaderData,useNavigate} from 'react-router';
const PostDetails = ({postPromise}) => {
    const {title, description} = use(postPromise)
    const details = useLoaderData()
    // console.log(details)
    const navigate = useNavigate()
    return (
        <div>
            <h2>{title}</h2>
            <small>{description}</small>
            <button onClick={()=> navigate(-1)}>Go Back</button>
        </div>
    );
};

export default PostDetails;