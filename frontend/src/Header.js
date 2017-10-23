import React from 'react'

const Header = ({title, company}) => {
    return (
        <section className="hero is-primary">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        {title}
                    </h1>
                    <h2 className="subtitle">
                        by {company}
                    </h2>
                </div>
            </div>
        </section>
    )
}

export default Header