import React from "react";
import classes from "./DropSettings.module.css";
import {NavLink} from "react-router-dom";

const DropSettings = (props) => {
    return (
        <div className={classes.userAccountSett}>
            <h3>Account Setting</h3>
            <ul className={classes.usLinks}>
                <li><NavLink to='/account-settings'>Account Settings</NavLink></li>
                <li><NavLink to='/privacy'>Privacy</NavLink></li>
                <li><NavLink to='/faqs'>Faqs</NavLink></li>
            </ul>
            <h3 className={classes.logout} onClick={() => {
                props.logOut()}}>Logout</h3>
        </div>)
};
export default DropSettings;
