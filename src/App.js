import React from 'react';
import './App.scss';
import Header from './modules/Header/Header';
import {BrowserRouter as Router} from 'react-router-dom' 
import { Welcome } from './Pages/Welcome';
import Works from './Pages/Works/Works';

const works = [
  { url: 'https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2019-01/50045948_10157219683543254_1059769440687620096_n.jpg?itok=dZTg3ncI',
   title: 'Название компани, сайта',
   href:  'example.com',
   link: 'example.com',
   text: 'Многостраничный  сайт для отеля для котиков с  формой обратной связи.',
   tags: [
       'html',
       'css',
       'js'        
   ]
},
{ url: 'https://cs6.pikabu.ru/post_img/2014/07/24/0/1406147731_1467007999.jpg',
title: 'kormru.ru',
href:  'kormru.ru',
link: 'http://kormru.ru/',
text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit architecto, eaque, ut ab quam sed cumque voluptatem animi earum harum laboriosam enim deserunt aliquid possimus asperiores. Dicta placeat veritatis sapiente!Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit architecto, eaque, ut ab quam sed cumque voluptatem animi earum harum laboriosam enim deserunt aliquid possimus asperiores. Dicta placeat veritatis sapiente!',
tags: [
   'html',
   'css',
   'js'  ,
   'wordpress',
   'shop'       
]
}
]


// const codopen = [
//   {link: ''}
// ]
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
        works={works}
        />

       </main>
      </div>
      <div>
      </div>
    </Router>
  );
}

export default App;
