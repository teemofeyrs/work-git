import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Input.css';

const Input = ({
                  name, id, className, input,label, meta: {error, touched}, ...attrs
               }) => {

    let classes;
    classes = classNames(
        'input',
        className,
    );

    return (
        <div className="inputWrapper">
            {label ? <label htmlFor={id}>{label}</label> : null }
            {touched && error && <span className="inputError">{error}</span>}
            <input
                {...input}
                type={name}
                id={id}
                className={classes}
                {...attrs}
            />
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