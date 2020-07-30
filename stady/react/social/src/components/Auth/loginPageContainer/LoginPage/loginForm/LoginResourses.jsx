import React from "react";
import './LoginResourses.css';
import ButtonGroup from "../../../../reusable components/button group/ButtonGroup";
import Button from "../../../../reusable components/button/Button";
import Icon from "../../../../reusable components/icon/Icon";

const LoginResourses = (props) => {
    return(
        <div className='login-resources'>
            <h4>Login Via Social Account</h4>
            <ButtonGroup vertical>
                <Button className={'facebook'}><Icon name='facebook'/>FaceBook</Button>
                <Button className={'twitter'}><Icon name='twitter'/>Twitter</Button>
            </ButtonGroup>
        </div>
    );
};
export default LoginResourses;