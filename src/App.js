import React from 'react';
import './App.scss';
import Header from './modules/Header/Header';
import {BrowserRouter as Router} from 'react-router-dom' 
import { Welcome } from './Pages/Welcome';
import Works from './Pages/Works/Works';

const works = [
  {preview: '', link: ''}
]
const codopen = [
  {link: ''}
]
const categories = [
  {name: 'Все', data: 'all'},
  {name: 'Лендинги', data: 'lending'},
  {name: 'Многостраничные сайты', data: 'cites'},
  {name: 'WordPress', data: 'wordpress'},
  {name: 'Разное', data: 'other'},
]

function App() {

  return (
    <Router>
      <div className="App">
      <Header />
       <main>
       <Welcome/>
       <Works 
        id="works"
        title="Мои работы"
        categories={categories}
        />

       <Works 
        id="codopen"
        title="Мой codopen"
        />
       </main>
      </div>
      <div>
      </div>
    </Router>
  );
}

export default App;
