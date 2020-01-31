import React from 'react';
import './App.css';
import BootStrap from 'bootstrap/dist/css/bootstrap.css';
import FontAwesome from 'react-fontawesome'
import Header from './components/Header';
import Intro from './components/Intro';
import Technologies from './components/Technologies';
import Article from './components/Article';
import Countries from './components/Countries';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Technologies />
      <Article />
      <Countries />
    </div>
  );
}

export default App;
