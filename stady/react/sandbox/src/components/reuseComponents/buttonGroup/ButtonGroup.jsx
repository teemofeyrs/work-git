import React from 'react';
import './buttongroup.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ButtonGroup = ({children, className, vertical, ...attrs}) => {
    const classes = classNames(
        'btn-group',
        className,
        {vertical}
    )

    return(
        <div className={classes} vertical={vertical} {...attrs}>
            {children}
        </div>
    )
};

ButtonGroup.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    vertical: PropTypes.bool
}

ButtonGroup.defaultProps ={
    children: null,
    className: '',
    vertical: false,
};

export default ButtonGroup;