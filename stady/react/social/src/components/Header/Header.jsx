import React from 'react';
import LogoSearch from './logoSearch/LogoSearch';
import Navigation from './navigation/Navigation';
import clsassesHeader from './Header.module.css';
import NavigationContainer from "./navigation/NavigationContainer";

const Header = (props) => {
    return (
        <div className={clsassesHeader.header}>
            <div className={clsassesHeader.wrapper}>
                <LogoSearch />
                <NavigationContainer toggleSettings={props.toggleSettings}/>
            </div>
        </div>

    );
}

export default Header;