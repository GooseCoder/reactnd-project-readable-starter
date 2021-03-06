import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';

import CommentForm from "./CommentForm";
import {createComment} from "../actions/CommentsActions";

class CommentFormCreate extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            redirect: false
        }
        this.handleSubmitData = this.handleSubmitData.bind(this)
    }

    handleSubmitData(post) {
        this.props.dispatch(createComment(post))
        this.setState({
            redirect: true
        })
    }

    render = () => {
        if (this.state.redirect) {
            return <Redirect push to={`/posts/${this.props.match.params.postId}`} />;
        }
        return (<CommentForm
            formTitle="Add a New Comment"
            handleSubmitData={this.handleSubmitData}
            postId={this.props.match.params.postId}
        />)
    }
}

export default connect()(CommentFormCreate)