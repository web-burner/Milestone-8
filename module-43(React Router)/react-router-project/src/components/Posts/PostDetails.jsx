// import React from 'react';
import {useLoaderData} from 'react-router';
const PostDetails = () => {
    const post = useLoaderData()
    // console.log(post)
    return (
        <div>
            <p>{post.title}</p>
        </div>
    );
};

export default PostDetails;