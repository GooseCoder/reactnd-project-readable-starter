import React from 'react'
import {Link} from 'react-router-dom'

const ToolBar = ({sortCriterias, handleSorting, sortedBy}) => {
    return (
        <div className="container is-fluid">
            <div className="level">
                <div className="level-left">
                    <div className="level-item">
                        Order by:
                    </div>
                    <div className="level-item">
                        <div className="buttons has-addons">
                            {sortCriterias.map((criteria, key) => (
                                <span
                                    key={key}
                                    onClick={()=>handleSorting(criteria)}
                                    className={`button ${sortedBy === criteria? 'is-info is-selected': ''}`}
                                >
                                    {criteria}
                                </span>
                            ))}

                        </div>
                    </div>
                </div>
                <div className="level-right">
                    <p className="level-item">
                        <Link to={`/createPost`} className='button is-success'>
                            <span className="icon">
                                <i className="fa fa-plus"/>
                            </span>
                            <span>
                                Add Post
                            </span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ToolBar