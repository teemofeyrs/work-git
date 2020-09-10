import React from 'react'
import classesLogo from './LogoSearch.module.css'

const LogoSearch = () => {
    return (
        <div className={classesLogo.logoSearch}>
            <p className={classesLogo.logoDescription}>Job&nbsp;<span>|</span>&nbsp;Offer</p>
        </div>
    );
}
export default LogoSearch;