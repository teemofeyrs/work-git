import React from 'react';
import {NavLink} from 'react-router-dom';
 const Header = () => {
    return(
        <div>
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
                <ul className="nav">
                    <li className="nav-item">
                        <NavLink to="/button" activeClassName="active">Button</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/buttonGroup" activeClassName="active">Button Group</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink to="/icon" activeClassName="active">Icon</NavLink>
                    </li>
                    
                </ul>
            </nav>
        </div>
    )
};
export default Header;