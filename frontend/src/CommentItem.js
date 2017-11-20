import React from 'react'
import moment from 'moment'
import {
    Link
} from 'react-router-dom'

const CommentItem = ({body, author, voteScore, timestamp, id}) => {
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
                        <p className="title is-size-6">
                            {body}
                        </p>
                        <p className="subtitle is-6">by {author}</p>
                    </div>
                    <div className="media-right">
                        {moment(timestamp).format('MMMM Do YYYY, h:mm:ss a')}
                    </div>
                </div>
                <div className="level">
                    <div className="level-left"/>
                    <div className="level-right">
                        <a className="button is-light">
                            <span className="icon">
                                <i className="fa fa-remove"/>
                            </span>
                            <span>
                                Delete
                            </span>
                        </a>
                        <a className="button is-light">
                            <span className="icon">
                                <i className="fa fa-edit"/>
                            </span>
                            <span>
                                Edit
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentItem