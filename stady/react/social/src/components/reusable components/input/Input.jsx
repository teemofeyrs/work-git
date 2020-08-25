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
            <input type={name}
                id={id}
                className={classes + error && 'error'}
                {...input}
                {...attrs}
            />
        </div>
    );
};

Input.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    label: PropTypes.string,
};

Input.defaultProps = {
    name: 'text',
    className: '',
    label: null,
    error: null,
};

export default Input;