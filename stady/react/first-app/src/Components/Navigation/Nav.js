import React from "react";
import classes from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = (props) => {
    return (
        <nav className={classes.navBar}>
            <div className={classes.wrapper}><i id="toggleBar" className="fa fa-bars" aria-hidden="true"/></div>
            <ul className={classes.menu}>
                <li><NavLink to={"/main"}>Home</NavLink></li>
                <li><NavLink to={"/about"}>About</NavLink></li>
                <li><NavLink to={"/skills"}>Skills</NavLink></li>
                <li><NavLink to={"/portfolio"}>Portfolio</NavLink></li>
                <li><NavLink to={"/contact"}>Contact</NavLink></li>
            </ul>
        </nav>
    );
};
export default Nav;