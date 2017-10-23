import React from 'react'

const CategoriesBar = ({categories, active, handleSelect}) => {
    return (
        <div className="tabs is-centered">
            <ul>
                {categories.map((category, key)=>(
                    <li key={key} className={category.name === active ? 'is-active' : 'is-not-active'}>
                        <a onClick={() => {handleSelect(category.name)}}>
                            <span className="icon is-small">
                                <i className={category.name === active ? 'fa fa-circle' : 'fa fa-circle-o'}/>
                            </span>
                            <span>{category.name}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CategoriesBar
