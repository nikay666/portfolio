import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from './modules/Header/Header';
import {BrowserRouter as Router} from 'react-router-dom' 
import { Welcome } from './Pages/Welcome';
import Works from './Pages/Works/Works';
import Contact from './Pages/Contact/Contact';
import Footer from './modules/Footer/Footer';
import {links, categories, urlWorks, urlContacts, getResponse, urlCodopen} from  './utilities'


function App() {
  const [works, setWorks] =  useState([])  
  const  [contacts, setContacts]  = useState([])
  const [codopen, setCodopen] = useState([])

  useEffect(() =>  {
    getResponse(urlWorks, setWorks)
    getResponse(urlContacts, setContacts)
    getResponse(urlCodopen, setCodopen)
  }, [])

  console.log('codopen', codopen)

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
          {/* Render Codopen */}
        
          <Contact contacts={contacts}/>
       </main>
       <Footer links={links} />
      </div>
    </Router>
  );
}

export default App;
