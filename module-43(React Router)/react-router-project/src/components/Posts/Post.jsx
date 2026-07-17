// import React from 'react';
import {Link} from 'react-router';
const Post = ({post}) => {
    // console.log(post)
    const {title,id} = post
    return (
        <div>
            <p> {id}. {title}</p>
            <Link to={`/post/${id}`}>Show Details</Link>
        </div>
    );
};

export default Post;

// {
//     "userId": 10,
//     "id": 97,
//     "title": "quas fugiat ut perspiciatis vero provident",
//     "body": "eum non blanditiis soluta porro quibusdam voluptas\nvel voluptatem qui placeat dolores qui velit aut\nvel inventore aut cumque culpa explicabo aliquid at\nperspiciatis est et voluptatem dignissimos dolor itaque sit nam"
// }