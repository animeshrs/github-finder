import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ title, icon }) => {
    return (
        <nav className="navbar bg-primary">
            <h1>
                <i className={icon} /> {title}
            </h1>
        </nav>
    )
}

Navbar.defaultProps = {
    icon: 'fa fa-plus',
    title: 'Default Title'
}

Navbar.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default Navbar
