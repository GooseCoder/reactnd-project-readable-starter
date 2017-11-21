import React from 'react'
import moment from 'moment'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {deleteComment, voteComment} from "./actions/CommentsActions";

class CommentItem extends React.Component {

    handleVoteComment = (id, vote) => {
        this.props.dispatch(voteComment(id, vote))
    }

    handleDelete = (id) => {
        this.props.dispatch(deleteComment(id))
    }

    render = () => {
        const {body, author, voteScore, timestamp, id} = this.props
        return (
            <div className="card">
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <div className="level">
                                <div className="level-left">
                                    <div className={`level-item is-size-4 ${voteScore>=0?'vote-count-positive':'vote-count-negative'}`}>
                                        {voteScore}
                                    </div>
                                    <div className="level-item fa fa-stack">
                                        <a onClick={() => this.handleVoteComment(id, 'downVote')} >
                                            <i
                                                className="fa fa-caret-down fa-2x"
                                                aria-hidden="true"
                                            />
                                        </a>
                                        <a onClick={() => this.handleVoteComment(id, 'upVote')} >
                                            <i
                                                className="fa fa-caret-up fa-2x"
                                                aria-hidden="true"
                                            />
                                        </a>
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
                            <a className="button is-light" onClick={()=>this.handleDelete(id)}>
                                <span className="icon">
                                    <i className="fa fa-remove"/>
                                </span>
                                <span>
                                    Delete
                                </span>
                            </a>
                            <Link className="button is-light" to={`/editComment/${id}`}>
                                <span className="icon">
                                    <i className="fa fa-edit"/>
                                </span>
                                <span>
                                    Edit
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(CommentItem)