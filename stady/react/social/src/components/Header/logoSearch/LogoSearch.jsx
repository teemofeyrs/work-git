import React from 'react';
import classesLogo from './LogoSearch.module.css';
import logo from './../../../assets/img/logo.png';

const LogoSearch = () => {
    return (
        <div className={classesLogo.logoSearch}>
           {/* <img src={logo} alt="logo" />*/}
            <p className={classesLogo.logoDescription}>Job&nbsp;<span>|</span>&nbsp;Offer</p>
        </div>
    );
}
export default LogoSearch;