// import React from 'react';
import {useLoaderData} from 'react-router';
import Post from './Post';
const Posts = () => {
    const posts = useLoaderData()
    return (
        <div>
            {posts.map(post => <Post post={post} key={post.id}></Post>)}
        </div>
    );
};

export default Posts;