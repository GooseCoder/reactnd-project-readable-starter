import React from 'react'
import {Link} from 'react-router-dom'

const Header = ({title, company}) => {
    return (
        <section className="hero is-primary">
            <div className="hero-body">
                <div className="container">
                    <Link to={`/`}>
                        <h1 className="title">
                            {title}
                        </h1>
                    </Link>
                    <h2 className="subtitle">
                        by {company}
                    </h2>
                </div>
            </div>
        </section>
    )
}

export default Header