import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/header/Header';
import ButtonPage from './components/content/button page/ButtonPage';
import ButtonGroupPage from './components/content/button group page/ButtonGroupPage';
import IconPage from "./components/content/icon page/IconPage";
import ImagePage from "./components/content/image page/ImagePage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header/>
          <div className='content'>
              <Switch>
                  <Route path='/' exact component={ButtonPage}/>
                  <Route path='/buttongroup'  component={ButtonGroupPage}/>
                  <Route path='/icon' component={IconPage}/>
                  <Route path='/image' component={ImagePage}/>

              </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
