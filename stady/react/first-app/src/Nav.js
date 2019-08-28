import React from "react";

const Nav = () => {
    return (
        <nav className="navBar">
            <div>
                <i className="fa fa-bars toggleBar" aria-hidden="true"></i>
                <ul className="menu">
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