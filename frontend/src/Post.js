import React from 'react'

const Post = ({title, body, author, category, voteScore}) => {
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
                        <p className="title is-4">{title}</p>
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

export default Post