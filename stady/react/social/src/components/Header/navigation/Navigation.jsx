import React, { Fragment, useState } from 'react'
import { NavLink } from 'react-router-dom'
import classesNav from './Navigation.module.css'
import noProfile from './../../../assets/img/no-profile.png'
import DropSettings from './DropSettings/DropSettings'
import Icon from '../../reusable components/icon/Icon'

const Navigation = (props) => {
    let [toggleMenu , setToggleMenu] = useState(false);
    let toggelMenu = (e) => {
        e.preventDefault();
        setToggleMenu( true );

    }
    return (
            <nav className={classesNav.navigation}>
                <button onClick={toggelMenu} id='toggleBtn' className={classesNav.toggleBtn}><Icon name={'bars'}/></button>
                {toggleMenu && <div className={classesNav.shotToggleMenu}>
                    <ul onClick={() => setToggleMenu(false)}>
                        <li><NavLink  to="/">Home</NavLink ></li>
                        <li><NavLink  to="/companies">Companies</NavLink ></li>
                        <li><NavLink  to="/projects">Progects</NavLink></li>
                        <li><NavLink  to="/profiles">Profiles</NavLink></li>
                        <li><NavLink  to="/jobs">Jobs</NavLink></li>
                        <li><NavLink  to="/messages">Messages</NavLink></li>
                    </ul>
                    <Icon name={'times'} onClick={() => setToggleMenu(false)}/>
                </div>}
                <ul>
                    <li><NavLink  to="/"><Icon name={'home'}/><br/>Home</NavLink ></li>
                    <li><NavLink  to="/companies"><Icon name={'building'}/><br/>Companies</NavLink ></li>
                    <li><NavLink  to="/projects"><Icon name={'puzzle-piece'}/><br/>Progects</NavLink></li>
                    <li><NavLink  to="/profiles"><Icon name={'users'}/><br/>Profiles</NavLink></li>
                    <li><NavLink  to="/jobs"><Icon name={'briefcase'}/><br/>Jobs</NavLink></li>
                    <li><NavLink  to="/messages"><Icon name={'envelope-o'}/><br/>Messages</NavLink></li>
                </ul>
                    <div id='toggleSettings' className={classesNav.toggleSettings} >
                        <Fragment>
                            <img id='userToggleImg'  src={(!props.myInfo.photos) ? noProfile : !props.myInfo.photos.small ?
                                                        noProfile : props.myInfo.photos.small}  alt='user'/>
                            <span className='userName'>{props.myInfo.fullName}</span>
                            { props.toggleSettings && <DropSettings logOut={props.logOut}/>}
                        </Fragment>
                    </div>
            </nav>
    );
};
export default Navigation;