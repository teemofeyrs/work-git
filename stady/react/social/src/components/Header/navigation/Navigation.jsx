import React from 'react';
import classesNav from './Navigation.module.css';


const Navigation = () => {
    return (
        <nav className={classesNav.navigation}>
            <ul>
                <li><a href="#"><i className="fa fa-home" aria-hidden="true"></i><br />Home</a></li>
                <li><a href="#"><i className="fa fa-building" aria-hidden="true"></i><br />Companies</a></li>
                <li><a href="#"><i className="fa fa-puzzle-piece" aria-hidden="true"></i><br />Progects</a></li>
                <li><a href="#"><i className="fa fa-users" aria-hidden="true"></i><br />Profiles</a></li>
                <li><a href="#"><i className="fa fa-briefcase" aria-hidden="true"></i><br />Jobs</a></li>
                <li><a href="#"><i className="fa fa-envelope-o" aria-hidden="true"></i><br />Messsges</a></li>
                <li><a href="#"><i className="fa fa-bolt" aria-hidden="true"></i><br />Notification</a></li>
                <li><img src='https://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg' alt='user'/><span className='userName'>John</span></li>
            </ul> 
        </nav>
    );
}
export default Navigation;