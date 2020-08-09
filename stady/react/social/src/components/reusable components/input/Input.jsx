import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Input.css';

const Input = ({
                  name, id, className, input,label,  ...attrs
               }) => {
    let classes;
    classes = classNames(
        'input',
        className,
    );

    return (
        <div className="inputWrapper">
            {label ? <label htmlFor={id}>{label}</label> : null }
            <input
                {...input}
                type={name}
                id={id}
                className={classes}
                {...attrs}
            />
            {attrs.touched && attrs.error && <span className="inputError">{attrs.error}</span>
            }
        </div>
    );
};

Input.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    textarea: PropTypes.bool,
    label: PropTypes.string,
    error: PropTypes.string,
};

Input.defaultProps = {
    name: 'text',
    className: '',
    label: null,
    error: null,
};

export default Input;