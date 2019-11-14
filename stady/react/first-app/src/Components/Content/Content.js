import React from 'react';
import {Route} from 'react-router-dom';
import Main from "./main/Main";
import About from "./about/About";
import Skills from "./slills/Skills";
import Portfolio from "./portfolio/Portfolio";
import Contacts from "./contacts/Contacts";

const Content = () => {
    return (
        <div>
            <Route path="/" exact component={Main} />
            <Route path="/about" exact component={About} />
            <Route path="/skills" exact component={Skills} />
            <Route path="/portfolio" exact component={Portfolio} />
            <Route path="/contact" exact component={Contacts} />
        </div>
    );
};
export default Content;