import React from "react";
import classes from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={classes.navBar}>
            <div>
                <i className="fa fa-bars toggleBar" aria-hidden="true"></i>
                <ul className={classes.menu}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">List</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>

        </nav>
    );
}
export default Nav;