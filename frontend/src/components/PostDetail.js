import React from 'react'
import {connect} from 'react-redux'
import {Link, Redirect} from 'react-router-dom'
import {loadPost} from "../actions/PostsActions";
import PostItem from "./PostItem";
import CommentList from "./CommentList";

class PostDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect: false,
        }
    }

    componentDidMount = () => {
        this.props.dispatch(loadPost(this.props.match.params.postId))
    }

    componentWillReceiveProps(props) {
        if (!props.currentPost.id) {
            this.setState({
                redirect: true
            })
        }
    }

    render = () => {
        if (this.state.redirect) {
            return <Redirect push to="/" />;
        }
        return (
            <div className={`container is-fluid`}>
                <PostItem {...this.props.currentPost}/>
                <br/>
                <div className="level">
                    <div className="level-left">
                        <div className="level-item is-size-4">
                            Comments
                        </div>
                    </div>
                    <div className="level-right">
                        <div className="level-item">
                            <Link to={`/createComment/${this.props.match.params.postId}`} className='button is-success'>
                        <span className="icon">
                            <i className="fa fa-plus"/>
                        </span>
                                <span>
                            Add Comment
                        </span>
                            </Link>
                        </div>
                    </div>
                </div>
                <CommentList postId={this.props.match.params.postId}/>
            </div>
        )
    }
}

function mapStateToProps ({ currentPost }) {
    return {
        currentPost
    }
}
export default connect(mapStateToProps)(PostDetail)

