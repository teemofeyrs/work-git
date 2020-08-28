import React from 'react';
import PropTypes from 'prop-types';
import './button.css';
import classNames from 'classnames';

const Button = ({className, children, onClick, disabled, active, ...attr}) => {

  let styles = classNames(
    'btn',
    {active},
    className
  )
  const Tag = attr.href ? 'a' : 'button';
  return(
    <Tag className={styles} onClick={onClick} disabled={disabled} active={active.toString()} {...attr}>{children}</Tag>
  );
}
Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  active: PropTypes.bool,
};
Button.defaultProps = {
  children: 'Button',
  className: '',
  active: false,
};

export default Button;

