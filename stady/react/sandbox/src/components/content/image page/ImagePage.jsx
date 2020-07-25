import React from 'react';
import './imagePage.css';
import Button from "../../reuseComponents/button/Button";
import Icon from "../../reuseComponents/icon/Icon";
import ButtonGroup from "../../reuseComponents/buttonGroup/ButtonGroup";
import Image from "../../reuseComponents/image/Image";

const ImagePage = () => {
    return (
        <div>
            <h2>1. This is icon</h2>
            <Image alt={'img'}/>
            <h2>2. This is button icon</h2>


            <h2>3. This is active button </h2>


            <h2>4. This is button whis others attr. </h2>


            <h2>5. This is button as a link </h2>

        </div>
    )
};

export default ImagePage;