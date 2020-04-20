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

const App = (props) => {
  return (
      <Router>
          <div className="App">
              <Header />
              <div className='content'>
                <Switch>
                    <Route path='/' exact><Home posts={props.state.profilePage.posts}
                                                dispach={props.dispach}
                                                newPostText={props.state.profilePage.newPostText}/></Route>
                    <Route path='/companies'><Companies/></Route>
                    <Route path='/projects'><Projects/></Route>
                    <Route path='/profiles'><Profiles/></Route>
                    <Route path='/jobs'><Jobs/></Route>
                    <Route path='/messages'><Mass messagesData={props.state.messagePage.messageData}
                                                  dialogs={props.state.messagePage.dialogs}
                                                  newMessageText={props.state.messagePage.newMessageText}
                                                  dispach={props.dispach}/>
                    </Route>
                    <Route path='/notification'><Notification/></Route>
                </Switch>
              </div>
          </div>
      </Router>
  );
};

export default App;
