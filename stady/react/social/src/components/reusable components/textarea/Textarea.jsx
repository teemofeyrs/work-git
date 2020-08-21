import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Textarea.css';

const Textarea = ({
                   id, className, ...attrs
               }) => {
    let classes;
    classes = classNames(
        'textarea',
        className,

    );

    return (
        <div className="textareaWrapper">
            <textarea
                id={id}
                className={classes}
                {...attrs}
            />
            {attrs.touched && attrs.error && <span className="textareaError">{attrs.error}</span>
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