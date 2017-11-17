import React from 'react'

const PostForm = ({name, show, handleCloseForm}) => {
    return (
        <div className={`modal ${show? 'is-active': ''}`}>
            <div className="modal-background"/>
            <div className="modal-content">
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Add Post</p>
                        <button className="delete" aria-label="close" onClick={() => handleCloseForm()}/>
                    </header>
                    <section className="modal-card-body">
                        <div className="field">
                            <label className="label">Name</label>
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Text input"
                                    defaultValue={name}
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Username</label>
                            <div className="control has-icons-left has-icons-right">
                                <input
                                    className="input is-success"
                                    type="text"
                                    placeholder="Text input"
                                    value="bulma"
                                />
                                <span className="icon is-small is-left">
                                <i className="fa fa-user"/>
                            </span>
                                <span className="icon is-small is-right">
                                <i className="fa fa-check"/>
                            </span>
                            </div>
                            <p className="help is-success">This username is available</p>
                        </div>

                        <div className="field">
                            <label className="label">Email</label>
                            <div className="control has-icons-left has-icons-right">
                                <input
                                    className="input is-danger"
                                    type="email"
                                    placeholder="Email input"
                                    value="hello@"
                                />
                                <span className="icon is-small is-left">
                                <i className="fa fa-envelope"/>
                            </span>
                                <span className="icon is-small is-right">
                                <i className="fa fa-warning"/>
                            </span>
                            </div>
                            <p className="help is-danger">This email is invalid</p>
                        </div>

                        <div className="field">
                            <label className="label">Subject</label>
                            <div className="control">
                                <div className="select">
                                    <select>
                                        <option>Select dropdown</option>
                                        <option>With options</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Message</label>
                            <div className="control">
                                <textarea className="textarea" placeholder="Textarea"/>
                            </div>
                        </div>

                        <div className="field">
                            <div className="control">
                                <label className="checkbox">
                                    <input type="checkbox"/>
                                    I agree to the <a href="#">terms and conditions</a>
                                </label>
                            </div>
                        </div>

                        <div className="field">
                            <div className="control">
                                <label className="radio">
                                    <input type="radio" name="question"/>
                                    Yes
                                </label>
                                <label className="radio">
                                    <input type="radio" name="question"/>
                                    No
                                </label>
                            </div>
                        </div>
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-success">Save changes</button>
                        <button className="button" onClick={() => handleCloseForm()}>Cancel</button>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default PostForm