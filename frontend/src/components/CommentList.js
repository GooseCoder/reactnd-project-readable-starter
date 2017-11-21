import React from 'react'
import { connect } from 'react-redux'

import CommentItem from "./CommentItem";
import {loadComments} from "../actions/CommentsActions";

class CommentList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            commentsOrder: 'votes'
        }
    }

    componentDidMount() {
        this.props.dispatch(loadComments(this.props.postId))
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