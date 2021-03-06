import React from 'react'
import {connect} from 'react-redux'
import moment from 'moment'
import {
    Link, Redirect
} from 'react-router-dom'

import {deletePost, loadPost, votePost} from "../actions/PostsActions";
import CommentsApi from "../api/CommentsApi";

class PostItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect: false,
            commentsCount: 0
        }
    }

    handleVotePost = (id, vote) => {
        this.props.dispatch(votePost(id, vote))
        this.props.dispatch(loadPost(id))
    }

    handleDelete = (id) => {
        this.props.dispatch(deletePost(id))
        this.setState({
            redirect: true
        })
    }

    updateCounters(id) {
        const commentsApi = new CommentsApi()
        commentsApi.getComments(id).then(currentComments => {
            this.setState({
                commentsCount: currentComments.length
            });
        }).catch(error => {
            throw(error);
        });
    }

    componentDidMount() {
        this.updateCounters(this.props.id)
    }

    componentWillReceiveProps(props) {
        this.updateCounters(props.id)
    }

    render = () => {
        const {title, body, author, category, voteScore, timestamp, id} = this.props
        if (this.state.redirect) {
            return <Redirect push to="/" />;
        }
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
                                        <a onClick={() => this.handleVotePost(id, 'downVote')} >
                                            <i
                                                className="fa fa-caret-down fa-2x"
                                                aria-hidden="true"
                                            />
                                        </a>
                                        <a onClick={() => this.handleVotePost(id, 'upVote')} >
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
                            <p className="title is-4">
                                <Link to={`/${category}/${id}`}>
                                    {title}
                                </Link>
                            </p>
                            <p className="subtitle is-6">by {author}</p>
                        </div>
                        <div className="media-right">
                            {moment(timestamp).format('MMMM Do YYYY, h:mm:ss a')}
                        </div>
                    </div>

                    <div className="content">
                        {body}
                        <br/>
                        <div className="tags">
                            <span className="tag">{category}</span>
                        </div>
                    </div>

                    <div className="level">
                        <div className="level-left">
                            <Link className="button is-light" to={`/${category}/${id}`}>
                            <span className="icon">
                                <i className="fa fa-comment"/>
                            </span>
                                <span>
                                Comments ({this.state.commentsCount})
                            </span>
                            </Link>
                        </div>
                        <div className="level-right">
                            <a className="button is-light" onClick={()=>this.handleDelete(id)}>
                                <span className="icon">
                                    <i className="fa fa-remove"/>
                                </span>
                                    <span>
                                    Delete
                                </span>
                            </a>
                            <Link className="button is-light" to={`/editPost/${id}`}>
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

export default connect()(PostItem)