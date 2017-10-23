import React from 'react'

const ListSorter = ({sortCriterias, handleSorting}) => {
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
            </div>
        </div>
    )
}

export default ListSorter