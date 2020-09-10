import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Textarea.css';

const Textarea = ({ id, input, className,touched, error ,...attrs }) => {
    let classes;
    let hasError = touched && error;
    classes = classNames(
        'textarea',
        className,
    );

    return (
        <div className={'textareaWrapper' + ' ' + (hasError ? 'error': '')}>
            <textarea {...input} id={id} className={classes} name={attrs.name}
                      placeholder={attrs.placeholder}/>
            {hasError && <span className={"textareaError"}>{error}</span>
            }
        </div>
    );
};

Textarea.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
};

Textarea.defaultProps = {
    className: '',

};

export default Textarea;