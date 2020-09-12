import React from 'react'
import classLoginPage from './LoginPage.module.css'
import Login from '../Login'

const LoginPage = ({captchaUrl}) => {
    return (
            <div className={classLoginPage.container}>
                <div className={classLoginPage.mainField}>
                    <div className={classLoginPage.article}>
                        <div className={classLoginPage.logo}>
                            <p className={classLoginPage.logoDescription}>Job&nbsp;<span>|</span>&nbsp;Offer</p>
                            <p className={classLoginPage.info}>JobOffer, is a global freelancing platform and social networking where businesses and
                                independent professionals connect and collaborate remotely</p>
                        </div>
                        <div className={classLoginPage.bannerImg}>
                            <img src="http://gambolthemes.net/workwise-new/images/cm-main-img.png" alt="img"/>
                        </div>
                    </div>
                    <div className={classLoginPage.loginField}>
                        <Login/>
                    </div>
                    </div>
            </div>
    )
};
export default LoginPage;