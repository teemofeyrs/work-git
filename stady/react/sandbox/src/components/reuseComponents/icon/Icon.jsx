import React from "react";
import './icon.css';
import classNames from 'classnames';
import PropTypes from "prop-types";

const Icon = ({className, name, size, onClick, disabled, ...attrs })=> {
    let styles = classNames(
        `fa fa-${name}`,
        className,
        { func: onClick },
        { disabled },

    );

    const elemSize = size ? { fontSize: `${size}rem` } : null;

    return(
        <i
            {...attrs}
            className={styles}
            onClick={disabled ? null : onClick}
            style={elemSize}
        />
    );
};
Icon.propTypes = {
    classNames: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.number,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
}

Icon.defaultProps = {
    classNames: '',
    name: '',
    size: null,
    onClick: null,
    disabled: false,
};
export default Icon;