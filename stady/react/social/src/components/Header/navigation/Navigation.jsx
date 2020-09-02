import React, {Fragment} from 'react';
import {NavLink} from "react-router-dom";
import classesNav from './Navigation.module.css';
import noProfile from './../../../assets/img/no-profile.png';
import DropSettings from "./DropSettings/DropSettings";
import Icon from "../../reusable components/icon/Icon";

const Navigation = (props) => {

    return (
            <nav className={classesNav.navigation}>
                <ul>
                    <li><NavLink  to="/"><Icon name={'home'}/><br/>Home</NavLink ></li>
                    <li><NavLink  to="/companies"><Icon name={'building'}/><br/>Companies</NavLink ></li>
                    <li><NavLink  to="/projects"><Icon name={'puzzle-piece'}/><br/>Progects</NavLink></li>
                    <li><NavLink  to="/profiles"><Icon name={'users'}/><br/>Profiles</NavLink></li>
                    <li><NavLink  to="/jobs"><Icon name={'briefcase'}/><br/>Jobs</NavLink></li>
                    <li><NavLink  to="/messages"><Icon name={'envelope-o'}/><br/>Messages</NavLink></li>
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