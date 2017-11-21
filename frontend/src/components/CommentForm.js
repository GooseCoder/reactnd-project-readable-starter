import React from 'react'
import uuid from 'uuid'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

class  CommentForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            body: '',
            author:'',
            timestamp: Date.now(),
            parentId: props.postId,
            id: uuid.v1()
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({[name]: value});
    }

    componentWillReceiveProps = (props) => {
        this.setState(props.currentComment)
    }

    render = () => {
        const {formTitle} = this.props
        return (
            <div className="container is-fluid">
                <span className='is-size-3'>{formTitle}</span>

                <div className="field">
                    <label className="label">Body</label>
                    <div className="control">
                        <textarea
                            className="textarea"
                            name="body"
                            placeholder="Body"
                            value={this.state.body}
                            onChange={this.handleInputChange}
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Author</label>
                    <div className="control has-icons-left">
                        <input
                            className="input"
                            name="author"
                            type="text"
                            placeholder="Author"
                            value={this.state.author}
                            onChange={this.handleInputChange}
                        />
                        <span className="icon is-small is-left">
                            <i className="fa fa-user"/>
                        </span>
                    </div>
                </div>

                <div className="field is-grouped">
                    <div className="control">
                        <button
                            className="button is-link"
                            onClick={() => this.props.handleSubmitData(this.state)}
                        >
                            Submit
                        </button>
                    </div>
                    <div className="control">
                        <Link className="button is-text" to={`/`}>Cancel</Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({ categories, currentComment }) {
    return {
        categories,
        currentComment
    }
}
export default connect(mapStateToProps)(CommentForm)