import React from 'react';
import './App.css';
import { Button } from './components/Button';
import Header from './modules/Header/Header';
import {BrowserRouter as Router} from 'react-router-dom' 
import { Welcome } from './Pages/Welcome';

function App() {

  return (
    <Router>
      <div className="App">
      <Header />
      <Welcome/>
      </div>
    </Router>
  );
}

export default App;
