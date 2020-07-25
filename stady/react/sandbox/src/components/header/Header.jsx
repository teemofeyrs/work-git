import React from 'react';
import {NavLink} from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <div className='header'>
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
                <div className="navbar-brand mb-0 h1 text-uppercase font-weight-bold">React Components</div>
                <ul className="nav">
                    <li className="nav-item">
                        <NavLink to="/" activeClassName="active">Button</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/buttonGroup" activeClassName="active">Button Group</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/icon" activeClassName="active">Icon</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/image" activeClassName="active">Image</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/tab-bar" activeClassName="active">Tab-bar</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
};
export default Header;