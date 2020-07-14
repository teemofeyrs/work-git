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

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header/>
          <div className='content'>
              <Switch>
                  <Route path='/' exact component={ButtonPage}/>
                  <Route path='/buttongroup' exact component={ButtonGroupPage}/>

              </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
