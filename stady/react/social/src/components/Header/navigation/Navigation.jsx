import React, {Fragment, useState} from 'react';
import { NavLink} from "react-router-dom";
import classesNav from './Navigation.module.css';
import noProfile from './../../../assets/img/no-profile.png';
import DropSettings from "./DropSettings/DropSettings";
const Navigation = (props) => {


    return (
            <nav className={classesNav.navigation}>
                <ul>
                    <li><NavLink  to="/"><i className="fa fa-home" aria-hidden="true"> </i><br/>Home</NavLink ></li>
                    <li><NavLink  to="/companies"><i className="fa fa-building" aria-hidden="true"> </i><br/>Companies</NavLink ></li>
                    <li><NavLink  to="/projects"><i className="fa fa-puzzle-piece" aria-hidden="true"> </i><br/>Progects</NavLink></li>
                    <li><NavLink  to="/profiles"><i className="fa fa-users" aria-hidden="true"> </i><br/>Profiles</NavLink></li>
                    <li><NavLink  to="/jobs"><i className="fa fa-briefcase" aria-hidden="true"> </i><br/>Jobs</NavLink></li>
                    <li><NavLink  to="/messages"><i className="fa fa-envelope-o" aria-hidden="true"> </i><br/>Messages</NavLink></li>
                    <li><NavLink  to="/notification"><i className="fa fa-bolt" aria-hidden="true"> </i><br/>Notification</NavLink></li>
                    <li id='toggleSettings' >
                        <Fragment>
                            <img id='userToggleImg'  src={(!props.myInfo.photos) ? noProfile : !props.myInfo.photos.small ?
                                                        noProfile : props.myInfo.photos.small}  alt='user'/>
                            <span className='userName'>{props.myInfo.fullName}</span>
                            { props.toggleSettings && <DropSettings logOut={props.logOut}/>}
                        </Fragment>
                    </li>
                </ul>
            </nav>
    );
};
export default Navigation;