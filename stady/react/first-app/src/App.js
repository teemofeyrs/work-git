import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Nav from './Components/Navigation/Nav';
import Content from './Components/Content/Content';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Nav/>
                <Content/>
            </div>
        </Router>
    );
};
export default App;
