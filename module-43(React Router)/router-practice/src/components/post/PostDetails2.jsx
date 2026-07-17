import { use } from "react";

const PostDetails2 = ({postPromise}) => {
    const post = use(postPromise)
    console.log(post)
    return (
        <div>
            <p>{post.title}</p>
        </div>
    );
};

export default PostDetails2;