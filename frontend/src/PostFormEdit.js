import React from 'react'
import PostForm from "./PostForm";

class PostFormEdit extends React.Component {

    constructor(props) {
        super(props)
        this.handleSubmitData = this.handleSubmitData.bind(this)
    }

    handleSubmitData() {
        console.log('edit a post');
        //this.props.dispatch()
    }

    render = () => (
        <PostForm handleSubmitData={this.handleSubmitData}/>
    )
}

export default PostFormEdit