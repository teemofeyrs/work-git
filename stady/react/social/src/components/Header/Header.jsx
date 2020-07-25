import React from 'react';
import LogoSearch from './logoSearch/LogoSearch';
import Navigation from './navigation/Navigation';
import clsassesHeader from './Header.module.css';
import NavigationContainer from "./navigation/NavigationContainer";

const Header = () => {
    return (
        <div className={clsassesHeader.header}>
            <div className={clsassesHeader.wrapper}>
                <LogoSearch />
                <NavigationContainer />
            </div>
        </div>

    );
}

export default Header;