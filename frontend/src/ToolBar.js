import React from 'react'

const ToolBar = ({sortCriterias, handleSorting, handleShowForm}) => {
    return (
        <div className="container is-fluid">
            <div className="level">
                <div className="level-left">
                    <div className="level-item">
                        Order by:
                    </div>
                    <div className="level-item">
                        <div className="select">
                            <select onSelect={handleSorting}>
                                {sortCriterias.map((criteria, key) => (
                                    <option key={key}>{criteria}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="level-right">
                    <p className="level-item">
                        <a className="button is-success" onClick={() => handleShowForm()}>
                            <span className="icon">
                                <i className="fa fa-plus"/>
                            </span>
                            <span>
                                Add Post
                            </span>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ToolBar