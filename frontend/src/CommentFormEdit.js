import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';

import CommentForm from "./CommentForm";
import {editComment, loadComment} from "./actions/CommentsActions";

class CommentFormEdit extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            redirect: false
        }
        this.handleSubmitData = this.handleSubmitData.bind(this)
    }

    componentDidMount() {
        this.props.dispatch(loadComment(this.props.match.params.commentId))
    }

    handleSubmitData(comment) {
        this.props.dispatch(editComment(comment))
        this.setState({
            redirect: true
        })
    }

    render = () => {
        if (this.state.redirect) {
            return <Redirect push to={`/posts/${this.props.currentComment.parentId}`} />;
        }
        return (
            <CommentForm
                formTitle="Edit Post"
                handleSubmitData={this.handleSubmitData}
            />
        )
    }
}

function mapStateToProps ({ currentComment }) {
    return {
        currentComment
    }
}

export default connect(mapStateToProps)(CommentFormEdit)