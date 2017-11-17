import React from 'react'
import PostItem from "./PostItem";

const PostList = ({posts}) => {
    return (
        <div className="container is-fluid">
            {posts.map(post => (
                <PostItem key={post.id} {...post}/>
            ))}
        </div>
    )
}

export default PostList