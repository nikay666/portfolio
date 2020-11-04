import React from 'react';
import './App.scss';
import Header from './modules/Header/Header';
import {BrowserRouter as Router} from 'react-router-dom' 
import { Welcome } from './Pages/Welcome';
import Works from './Pages/Works/Works';
import Contact from './Pages/Contact/Contact';
import { githubSVG, instagramSVG, telegramSVG } from './utilits';
import Footer from './modules/Footer/Footer';

const works = [
  { 
    url: 'https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2019-01/50045948_10157219683543254_1059769440687620096_n.jpg?itok=dZTg3ncI',
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
  { 
    url: 'https://cs6.pikabu.ru/post_img/2014/07/24/0/1406147731_1467007999.jpg',
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
  },
  { 
    url: 'https://icdn.lenta.ru/images/2017/07/12/16/20170712161939103/detail_15b9eca8fd6e00746cfc42a472cbee2d.jpg',
    title: 'something.ru',
    href:  'something.ru',
    link: 'http://something.ru/',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.  Reprehenderit architecto, eaque, ut ab quam sed cumque voluptatem animi earum harum laboriosam enim deserunt aliquid possimus asperiores. Dicta placeat veritatis sapiente!',
    tags: [
      'html',
      'css',
      'js',
      'lending'       
    ]
  }
]


const codopen = [
  {link: 
    `<p class="codepen" data-height="254" data-theme-id="dark" data-default-tab="result" data-user="nikay666" data-slug-hash="GRqWPBV" style="height: 254px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Test">
    <span>See the Pen <a href="https://codepen.io/nikay666/pen/GRqWPBV">
    Test</a> by nikay666 (<a href="https://codepen.io/nikay666">@nikay666</a>)
    on <a href="https://codepen.io">CodePen</a>.</span>
  </p>
  <script async src="https://static.codepen.io/assets/embed/ei.js"></script>`
  }
]

const contacts = [
  {type:'email', data: 'nikay.yakubova@gmail.com', href: 'mailto:nikay.yakubova@gmail.com',},
  {type: 'телефон', data: '8(999)8094720', href: 'tel:+79998094720'},
  {type: 'fl.ru', data: 'fl.ru/my_account', href: 'fl.ru/my_account'},
  {type: 'Соц. сети', links: [
    {href: 'https://t.me/nikay666', data: telegramSVG},
    {href: 'https://www.instagram.com/', data: instagramSVG },
    {href: 'https://github.com/nikay666', data: githubSVG},
]}
]



const categories = [
  {name: 'Все', data: 'all'},
  {name: 'Лендинги', data: 'lending'},
  {name: 'Многостраничные сайты', data: 'cites'},
  {name: 'WordPress', data: 'wordpress'},
  {name: 'Разное', data: 'other'},
  
]

const links = [
  {name: 'Главная', to: '/' }, 
  {name: 'Работы', to: '/works' }, 
  {name: 'Мой codopen', to: '/codopen' }, 
  {name: 'Контакты', to: '/contact' }, 
]

function App() {

  return (
    <Router>
      <div className="App">
        <Header links={links} />
        <main>
          <Welcome contacts={contacts}/>
          <Works 
            id="works"
            title="Мои работы"
            categories={categories}
            works={works}
            />
          <Contact contacts={contacts}/>
       </main>
       <Footer links={links} />
      </div>
    </Router>
  );
}

export default App;
