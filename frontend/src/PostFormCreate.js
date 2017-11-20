import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';

import PostForm from "./PostForm";
import {createPost} from "./actions/PostsActions";

class PostFormCreate extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            redirect: false
        }
        this.handleSubmitData = this.handleSubmitData.bind(this)
    }

    handleSubmitData(post) {
        this.props.dispatch(createPost(post))
        this.setState({
            redirect: true
        })
    }

    render = () => {
        if (this.state.redirect) {
            return <Redirect push to="/" />;
        }
        return (<PostForm formTitle="Add a New Post" handleSubmitData={this.handleSubmitData}/>)
    }
}

export default connect()(PostFormCreate)