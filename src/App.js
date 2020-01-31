import React from 'react';
import './App.css';
import BootStrap from 'bootstrap/dist/css/bootstrap.css';
import Intro from './components/Intro';
import Technologies from './components/Technologies';
import Article from './components/Article';

function App() {
  return (
    <div className="App">
      <Intro />
      <Technologies />
      <Article />
    </div>
  );
}

export default App;
