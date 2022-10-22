import React from 'react'

export const Header = ({titleText}) => {
    return (
        <nav className="navbar navbar-expand-lg bg-white py-3 shadow sticky-top">
            <div className="ms-4">
                <h2 data-testid="header-title">{titleText}</h2>
            </div>
        </nav>
    )
}
