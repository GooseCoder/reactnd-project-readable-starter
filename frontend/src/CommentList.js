import React from 'react'
import { connect } from 'react-redux'

import CommentItem from "./CommentItem";
import {loadComments} from "./actions/CommentsActions";

class CommentList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            commentsOrder: 'votes'
        }
        this.handleDeleteComment = this.handleDeleteComment.bind(this)
        this.handleVoteComment = this.handleVoteComment.bind(this)
    }

    componentDidMount() {
        this.props.dispatch(loadComments(this.props.postId))
    }

    handleDeleteComment = (post) => {
        // this.props.dispatch(deletePost(post))
        console.log('deleting comment')
    }

    handleVoteComment = (id,vote) => {
        // this.props.dispatch(votePost(id,vote))
        console.log('voting comment')
    }

    processComments(comments, selectOrder){
        return comments
            .sort((f,s) => selectOrder === 'date' ? s.timestamp - f.timestamp : s.voteScore - f.voteScore )
    }

    render = () => {
        const {currentComments} = this.props;
        const processComments = this.processComments(currentComments, this.state.commentsOrder)
        return (
            <div className="container is-fluid">
                {processComments.map(comment => (
                    <CommentItem key={comment.id} {...comment}/>
                ))}
            </div>
        )
    }
}

function mapStateToProps ({ currentComments }) {
    return {
        currentComments
    }
}

export default connect(mapStateToProps)(CommentList)