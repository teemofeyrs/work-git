import React from 'react';
import './App.css';
import {
    BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import Header from './components/Header/Header';
import Home from "./components/Content/contentElem/Home";
import Companies from "./components/Content/contentElem/Companies";
import Projects from "./components/Content/contentElem/Projects";
import Profiles from "./components/Content/contentElem/Profiles";
import Jobs from "./components/Content/contentElem/Jobs";
import Mass from "./components/Content/contentElem/Mass";
import Notification from "./components/Content/contentElem/Notification";
import UserProfile from "./components/Content/contentElem/UserProfile";
import AuthMe from './components/Auth/AuthMe'

const App = (props) => {
  return (
      <Router>
        <Switch>
          <Route path='/auth'><AuthMe/></Route>
          <div className="App">
              <Header />
              <div className='content'>
                <Switch>
                    <Route path='/home'><Home/></Route>
                    <Route path='/companies'><Companies/></Route>
                    <Route path='/projects'><Projects/></Route>
                    <Route path='/profiles'><Profiles/></Route>
                    <Route path='/jobs'><Jobs/></Route>
                    <Route path='/messages'><Mass/></Route>
                    <Route path='/notification'><Notification/></Route>
                    <Route path='/user-profile/:userId?'><UserProfile/></Route>
                </Switch>
              </div>
          </div>
        </Switch>
      </Router>
  );
};

export default App;
