import React, {Component} from "react";
import classes from './Nav.module.css';
import {NavLink} from "react-router-dom";

let NavBlock = () => {
    return (
        <div>
            <ul id={classes.menu}>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/about"}>About</NavLink></li>
                <li><NavLink to={"/skills"}>Skills</NavLink></li>
                <li><NavLink to={"/portfolio"}>Portfolio</NavLink></li>
                <li><NavLink to={"/contact"}>Contact</NavLink></li>
            </ul>
        </div>
    )
};
class Nav extends Component {
    constructor(props) {
        super(props);
        this.showMenu = this.showMenu.bind(this);
        this.state = {
            on: false
        }
    }

    showMenu = (e) => {
        e.preventDefault();
        this.setState({
            on: !this.state.on
        })
    };

    render() {
        return (
            <nav className={classes.navBar}>
                {this.state.on && <NavBlock/>}
                <div className={classes.wrapper}>
                    <i id={classes.toggleBar} onClick={this.showMenu} className="fa fa-bars"
                       aria-hidden="true"/>
                </div>

            </nav>
        );
    };
}

export default Nav;