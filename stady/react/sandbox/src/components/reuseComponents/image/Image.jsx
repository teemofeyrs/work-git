import React from "react";
import './image.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Image = ({src, className, alt, width, height, ...attrs}) => {
    const style = classNames(
        'img',
        className
    );
    if (!src) src = `https://via.placeholder.com/${width}`;
    return (
        <img className={style} src={src}/>
    );
};
Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
};
Image.defaultProps = {
    src: '',
    alt: '',
    className: '',
    width: 150,
    height: 150,
};
export default Image;