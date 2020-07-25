import React, {Fragment} from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Footer.css';


const Footer = ({className, children, array}) => {
    const classes = classNames(
        'footer',
        className
    );
    const liElements = array.map(item => {
        return<li key={item}><a href='#'>{item}</a></li>
    } );
    debugger;
    return (
        <Fragment>
            <ul className={classes}>
                {liElements}
                <div>&copy; Copyright 2020</div>
                {/*<li><a href="">Help Center</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Privat Policy</a></li>
                <li><a href="">Community Guadelines</a></li>
                <li><a href="">Cookies Policy</a></li>
                <li><a href="">Career</a></li>
                <li><a href="">Forum</a></li>
                <li><a href="">Language</a></li>
                <li><a href="">Copyright Policy</a></li>*/}
            </ul>
        </Fragment>
    )
};

Footer.PropTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    array: PropTypes.array
};
Footer.defaultProp ={
    className: '',
    children: null,
    array: []
};
export default Footer;