import React from 'react';

import Button from "../../reuseComponents/button/Button";

const ButtonPage = () => {
    return (
        <div>
            <h2>1. This is button whith onclick method</h2>
            <Button classNames='btn' onClick={()=>{console.log('!!!')}}>button whith onclick</Button>

            <h2>2. This is disabled button </h2>
            <Button classNames='btn' onClick={()=>{console.log('!!!')}} disabled>disabled button</Button>

            <h2>3. This is active button </h2>
            <Button classNames='btn' onClick={()=>{console.log('!!!')}} active/>

            <h2>4. This is button whis others attr. </h2>
            <Button data-name='button'/>
            <Button type='submit'/>

            <h2>5. This is button as a link </h2>
            <Button href='www.google.com' active>Moove to google</Button>
            <Button href='www.google.com' disabled>Moove to google</Button>
        </div>
    )
};

export default ButtonPage;