import React, {Fragment} from 'react';
import { Link} from "react-router-dom";
import classesNav from './Navigation.module.css';

const Navigation = (props) => {
    return (
            <nav className={classesNav.navigation}>
                <ul>
                    <li><Link  to="/"><i className="fa fa-home" aria-hidden="true"> </i><br/>Home</Link ></li>
                    <li><Link  to="/companies"><i className="fa fa-building" aria-hidden="true"> </i><br/>Companies</Link ></li>
                    <li><Link  to="/projects"><i className="fa fa-puzzle-piece" aria-hidden="true"> </i><br/>Progects</Link></li>
                    <li><Link  to="/profiles"><i className="fa fa-users" aria-hidden="true"> </i><br/>Profiles</Link></li>
                    <li><Link  to="/jobs"><i className="fa fa-briefcase" aria-hidden="true"> </i><br/>Jobs</Link></li>
                    <li><Link  to="/messages"><i className="fa fa-envelope-o" aria-hidden="true"> </i><br/>Messages</Link></li>
                    <li><Link  to="/notification"><i className="fa fa-bolt" aria-hidden="true"> </i><br/>Notification</Link></li>
                    <li>{ props.isAuth ?
                        <Fragment>
                            <img  src={'https://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg'}  alt='user'/>
                            <span className='userName'>John</span>
                        </Fragment>
                         :  <Fragment><p>Not login</p></Fragment>}</li>
                </ul>
            </nav>
    );
};
export default Navigation;