import React from 'react'
import { Button } from '../../components/Button'
import List from '../../components/List/List'
import { ContactSection } from '../../modules/ContactSection'


const items = [
    'HTML5, CSS3/SCSS',
    'JS(ванильный или библиотеки)',
    'ReactJS',
    'Wordpress(лендинги, многостраничные сайты, блоги, интернет-магазины)'
]

const Welcome = ({contacts}) => {
    return (
        <section className="welcome">
           <div className="welcome__box">
            <h1 className="h1">Привет! Я frontend-разработчик.</h1>
            <List items={items}/>
            <div className="welcome__box-buttons">
                <Button>Мои работы</Button>
                <Button>Связаться со мной</Button>
            </div>
           </div>
           <ContactSection contacts={contacts} window/>
           
        </section>
    )
}

export default Welcome
