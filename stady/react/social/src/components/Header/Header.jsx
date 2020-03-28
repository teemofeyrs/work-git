import React from 'react';
import LogoSearch from './logoSearch/LogoSearch';
import Navigation from './navigation/Navigation';
import clsassesHeader from './Header.module.css';

const Header = () => {
    return (
        <div className={clsassesHeader.header}>
            <div className={clsassesHeader.wrapper}>
                <LogoSearch />
                <Navigation />
            </div>
        </div>

    );
}

export default Header;