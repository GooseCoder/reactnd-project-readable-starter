import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

const PostForm = ({categories}) => {
    return (
            <div className="container is-fluid">
                <span className='is-size-3'>Add a New Post</span>

                <div className="field">
                    <label className="label">Title</label>
                    <div className="control has-icons-left">
                        <input
                            className="input"
                            type="text"
                            placeholder="Title"
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
                            type="text"
                            placeholder="Author"
                        />
                        <span className="icon is-small is-left">
                            <i className="fa fa-user"/>
                        </span>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Message</label>
                    <div className="control">
                        <textarea className="textarea" placeholder="Textarea"/>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Category</label>
                    <div className="control">
                        <div className="select">
                            <select>
                                {categories
                                    .filter(category => category.name !== 'all')
                                    .map((category, key) => (
                                        <option key={key}>
                                            {category.name}
                                        </option>
                                ))}

                            </select>
                        </div>
                    </div>
                </div>

                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-link">Submit</button>
                    </div>
                    <div className="control">
                        <Link className="button is-text" to={`/`}>Cancel</Link>
                    </div>
                </div>
            </div>
    )
}

function mapStateToProps ({ categories }) {
    return {
        categories
    }
}
export default connect(mapStateToProps)(PostForm)