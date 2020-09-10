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
    return (
        <Fragment>
            <ul className={classes}>
                {liElements}
                <div>&copy; Copyright 2020</div>
            </ul>
        </Fragment>
    )
};

Footer.propTypes = {
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