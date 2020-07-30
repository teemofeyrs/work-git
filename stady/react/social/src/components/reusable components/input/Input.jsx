import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Input.css';

const Input = ({
                  name, id, className, label, error, ...attrs
               }) => {
    const classes = classNames(
        'input',
        className,
        { error },
    );

    return (
        <div className="inputWrapper">
            <div className="labelsWrapper">
                {label
                && <label className="inputLabel" htmlFor={id}>{label}</label>
                }
                {attrs.required
                && <span className="inputRequired">Required</span>
                }
            </div>
            <input
                type={name}
                id={id}
                className={classes}
                {...attrs}
            />
            {error
            && <span className="inputError">{error}</span>
            }
        </div>
    );
};

Input.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.string,
};

Input.defaultProps = {
    name: 'text',
    className: '',
    label: '',
    error: '',
};

export default Input;