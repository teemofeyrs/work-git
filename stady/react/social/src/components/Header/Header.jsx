import React from 'react';
import LogoSearch from './logoSearch/LogoSearch';
import classesHeader from './Header.module.css';
import NavigationContainer from "./navigation/NavigationContainer";

const Header = (props) => {
    return (
        <div className={classesHeader.header}>
            <div className={classesHeader.wrapper}>
                <LogoSearch />
                <NavigationContainer toggleSettings={props.toggleSettings}/>
            </div>
        </div>
    );
}

export default Header;