import React, {Fragment} from "react";
import classLoginPage from './LoginPage.module.css';
import logo from './../../../../assets/img/logo.png'
import Footer from "../../../Footer/Footer";

const LoginPage = (props) => {
    const footerItems = ['Help Center', 'About', 'Privat Policy', 'Community Guadelines', 'Cookies Policy']
    return (
        <Fragment>
            <div className={classLoginPage.container}>
                <div className={classLoginPage.mainField}>
                    <div className={classLoginPage.article}>
                        <div className={classLoginPage.logo}>
                            <img src='http://gambolthemes.net/workwise-new/images/cm-logo.png' alt="logo"/>
                            <p>WorkOffer, is a global freelancing platform and social networking where businesses and
                                independent professionals connect and collaborate remotely</p>
                        </div>
                        <div className={classLoginPage.bannerImg}>
                            <img src="http://gambolthemes.net/workwise-new/images/cm-main-img.png" alt="img"/>
                        </div>
                    </div>
                    <div className={classLoginPage.loginField}>
                        <div className={classLoginPage.tabGroup}>
                            <ul>
                                <li>
                                    <button>Sign in</button>
                                </li>
                                <li>
                                    <button>Sign Up</button>
                                </li>
                            </ul>
                        </div>
                        <div className={classLoginPage.signInForm}>

                        </div>
                    </div>
                </div>
            </div>
            <div className={classLoginPage.containerFooter}>
                <Footer className={'footerSign'} array={footerItems}/>
            </div>
        </Fragment>
    )
};
export default LoginPage;