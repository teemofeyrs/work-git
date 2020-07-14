import React from 'react';
import Button from "../../reuseComponents/button/Button";
import ButtonGroup from "../../reuseComponents/buttonGroup/ButtonGroup";

const ButtonGroupPage = () => {
    return (
        <div>
            <h2>1. This is button group </h2>
            <ButtonGroup >
                <Button classNames='btn' onClick={()=>{console.log('!!!')}}>button whith onclick</Button>
                <Button classNames='btn' active>active button</Button>
                <Button classNames='btn' disabled>disabled button</Button>
            </ButtonGroup>

            <h2>2. This is button group whith vertical direction</h2>
            <ButtonGroup vertical>
                <Button classNames='btn' onClick={()=>{console.log('!!!')}}>button whith onclick</Button>
                <Button classNames='btn' active>active button</Button>
                <Button classNames='btn' disabled>disabled button</Button>
            </ButtonGroup>
        </div>
    )
};

export default ButtonGroupPage;