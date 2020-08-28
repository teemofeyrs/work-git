import React from "react";
import './Checkbox.css';
import classNames from 'classnames';

export const Checkbox = ({input, label, type, className,  meta: {touched, error, warning} }) => {
    let style = classNames(
        'checkbox',
        className
    )
    return (<div className={"checkboxContainer"}>
        <label>{label}
            <div>
                <input className={style} {...input} placeholder={label} type={type}/>
                {touched &&
                ((error && <span>{error}</span>) ||
                    (warning && <span>{warning}</span>))}
            </div>
        </label>

    </div>)
};
