import React from "react";
import classesRewivewSection from './RewivewSection.module.css';

const MeinRewivew = (props) => {
   let tabs = [
        {
            value: 'Feed',
            icon: 'fa fa-list-alt'
        },
        {
            value: 'info',
            icon: 'fa fa-info-circle'
        },
        {
            value: 'Jobs',
            icon: 'fa fa-briefcase'
        },
        {
            value: 'Bids',
            icon: 'fa fa-check-square-o'
        },
        {
            value: 'Portfolio',
            icon: 'fa fa-slideshare'
        },
        {
            value: 'Reviews',
            icon: 'fa fa-commenting-o'
        },
        {
            value: 'Payment',
            icon: 'fa fa-credit-card'
        },
    ]

    let tabsButton = tabs.map(tab => (<li><i className={tab.icon}></i><span>{tab.value}</span></li>));
   return(
        <div className={classesRewivewSection.main}>
            <h3>{props.userInfo.fullName}</h3>
            <h5>{props.userInfo.aboutMe}</h5>
            <div className={classesRewivewSection.tabsManue}>
                <ul>{tabsButton}</ul>
            </div>
        </div>
    );
};
export default MeinRewivew;