import React from 'react'
import {
    Link
} from 'react-router-dom'

const PostItem = ({title, body, author, category, voteScore, id}) => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <div className="level">
                            <div className="level-left">
                                <div className="level-item vote-count-positive is-size-4">
                                    {voteScore}
                                </div>
                                <div className="level-item fa fa-stack">
                                    <i className="fa fa-caret-down fa-2x" aria-hidden="true"/>
                                    <i className="fa fa-caret-up fa-2x" aria-hidden="true"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="media-content">
                        <p className="title is-4">
                            <Link onClick={() => {console.log('from here')}} to={`/posts/${id}`}>
                                {title}
                            </Link>
                        </p>
                        <p className="subtitle is-6">by {author}</p>
                    </div>
                </div>

                <div className="content">
                    {body}
                    <br/>
                    {category}
                </div>
            </div>
        </div>
    )
}

export default PostItem