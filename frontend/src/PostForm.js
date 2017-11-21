import React from 'react'
import uuid from 'uuid'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

class  PostForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            author:'',
            body: '',
            category: '',
            timestamp: Date.now(),
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
        this.setState(props.currentPost)
    }

    render = () => {
        const {categories, formTitle} = this.props
        return (
            <div className="container is-fluid">
                <span className='is-size-3'>{formTitle}</span>
                <div className="field">
                    <label className="label">Title</label>
                    <div className="control has-icons-left">
                        <input
                            className="input"
                            name="title"
                            type="text"
                            placeholder="Title"
                            value={this.state.title}
                            onChange={this.handleInputChange}
                        />
                        <span className="icon is-small is-left">
                            <i className="fa fa-edit"/>
                        </span>
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
                    <label className="label">Category</label>
                    <div className="control">
                        <div className="select">
                            <select
                                name="category"
                                value={this.state.category}
                                onChange={this.handleInputChange}
                            >
                                <option disabled value="">Select a category</option>
                                {categories
                                    .filter(category => category.name !== 'all')
                                    .map((category, key) => (
                                        <option value={category.name} key={key}>
                                            {category.name}
                                        </option>
                                    ))}
                            </select>
                        </div>
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

function mapStateToProps ({ categories, currentPost }) {
    return {
        categories,
        currentPost
    }
}
export default connect(mapStateToProps)(PostForm)