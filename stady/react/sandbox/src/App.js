import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import ButtonPage from './components/ButtonPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header/>
      </div>
      <Switch>
        <Route path='/' exact component={ButtonPage}/>
        
      </Switch>
    </Router>
  );
}

export default App;
