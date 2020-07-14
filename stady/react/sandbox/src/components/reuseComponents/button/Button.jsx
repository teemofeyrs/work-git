import React from 'react';
import './button.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({className, onClick, children, disabled, active, ...attrs}) => {
    const onClickAction = (e) => {
        if(disabled){
            e.preventDefault()
        }else{
            return onClick(e);
        }
    }
    const classes = classNames(
        'btn',
        className ,
        {active}
    );
    const Tag = attrs.href ? 'a' : 'button';
    return (
            <Tag className={classes}
            disabled={disabled}
            onClick={onClickAction}
            {...attrs}>{children}</Tag>
    )
};

Button.propTypes = {
    classNames: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.node,
    disabled: PropTypes.bool,
    active: PropTypes.bool,
}

Button.defaultProps = {
    classNames: '',
    onClick: () => {},
    children: 'Default button',
    disabled: false,
    active: false,
};

export default Button;