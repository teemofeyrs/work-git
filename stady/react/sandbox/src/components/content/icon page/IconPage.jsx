import React from 'react';
import './iconPage.css';
import Button from "../../reuseComponents/button/Button";
import Icon from "../../reuseComponents/icon/Icon";
import ButtonGroup from "../../reuseComponents/buttonGroup/ButtonGroup";

const IconPage = () => {
    return (
        <div>
            <h2>1. This is icon</h2>
            <Icon name="recycle" />
            <h2>2. This is button icon</h2>
            <ButtonGroup>
                <Button active>
                    <Icon name="align-right" />
                </Button>
                <Button>
                    <Icon name="align-center" />
                </Button>
                <Button>
                    <Icon name="align-left" />
                </Button>
                <Button>
                    <Icon name="align-justify" />
                </Button>
            </ButtonGroup>

            <h2>3. This is active button </h2>


            <h2>4. This is button whis others attr. </h2>


            <h2>5. This is button as a link </h2>

        </div>
    )
};

export default IconPage;