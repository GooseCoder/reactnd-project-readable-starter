import React from 'react'
import Post from './Post'

const PostList = ({posts, category}) => {
    return (
        <div className="container is-fluid">
            {posts.filter(post => {
                if (category && category !== 'all') {
                    return post.category === category
                }
                return true
            }).map(post => (
                <Post key={post.id} {...post}/>
            ))}
        </div>
    )
}

export default PostList