import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from './modules/Header/Header';
import {BrowserRouter as Router} from 'react-router-dom' 
import { Welcome } from './Pages/Welcome';
import Works from './Pages/Works/Works';
import Contact from './Pages/Contact/Contact';
import Footer from './modules/Footer/Footer';
import {links, categories, urlWorks, urlContacts, getResponse} from  './utilities'


function App() {
  const [works, setWorks] =  useState([])  
  const  [contacts, setContacts]  = useState([])
  //codopen

  useEffect(() =>  {
    getResponse(urlWorks, setWorks)
    getResponse(urlContacts, setContacts)
  }, [])

  return (
    <Router>
      <div className="App">
        <Header links={links} />
        <main>
          <Welcome contacts={contacts}/>
          {
            works.length ?  
            <Works 
            id="works"
            title="Мои работы"
            categories={categories}
            works={works}
            />  : 
            null
          }
        
          <Contact contacts={contacts}/>
       </main>
       <Footer links={links} />
      </div>
    </Router>
  );
}

export default App;
