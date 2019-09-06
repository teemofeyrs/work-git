import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Components/Navigation/Nav';
import Content from './Content';

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Content />
    </div>
  );
};
export default App;
