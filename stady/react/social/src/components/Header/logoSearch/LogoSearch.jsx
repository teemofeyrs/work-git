import React from 'react';
import classesLogo from './LogoSearch.module.css';

const LogoSearch = () => {
    return (
        <div className={classesLogo.logoSearch}>
            <img src="https://b2.pngbarn.com/png/761/249/90/worker-icon-jobs-and-occupations-icon-painter-icon-logo-neon-blackandwhite-automotive-decal-symbol-png-clip-art.png" alt="" />
            <form>
                <input type="text" name="search" placeholder="Search..."/>
                <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
            </form>
        </div>
    );
}
export default LogoSearch;