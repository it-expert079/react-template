import React from 'react';
import './App.css';
import BootStrap from 'bootstrap/dist/css/bootstrap.css';
import FontAwesome from 'react-fontawesome'
import Header from './components/Header';
import Intro from './components/Intro';
import Technologies from './components/Technologies';
import Article from './components/Article';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Technologies />
      <Article />
    </div>
  );
}

export default App;
