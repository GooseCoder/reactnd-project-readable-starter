import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';

import PostForm from "./PostForm";
import {editPost, loadPost} from "./actions/PostsActions";

class PostFormEdit extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            redirect: false
        }
        this.handleSubmitData = this.handleSubmitData.bind(this)
    }

    componentDidMount() {
        this.props.dispatch(loadPost(this.props.match.params.postId))
    }

    handleSubmitData(post) {
        this.props.dispatch(editPost(post))
        this.setState({
            redirect: true
        })
    }

    render = () => {
        if (this.state.redirect) {
            return <Redirect push to="/" />;
        }
        return (
            <PostForm
                formTitle="Edit Post"
                handleSubmitData={this.handleSubmitData}
            />
        )
    }
}

function mapStateToProps ({ currentPost }) {
    return {
        currentPost
    }
}

export default connect(mapStateToProps)(PostFormEdit)