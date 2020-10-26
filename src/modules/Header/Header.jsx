import React from 'react'
import { HeaderLink } from '../../components/HeaderLink'
import './Header.scss'

const Header = () => {
    const links = [
        {name: 'Главная', to: '/' }, 
        {name: 'Работы', to: '#works' }, 
        {name: 'Мой codopen', to: '#codopen' }, 
        {name: 'Контакты', to: '#contact' }, 
    ]
    return (
        <header className="header">
            <nav className="header__nav">
                <ul className="header__nav-list">
                        {
                            links.map((obj, index) => (
                                <HeaderLink 
                                    key={index}
                                    to={obj.to}
                                    name={obj.name}/>
                            ))
                        }                    
                </ul>
            </nav>
        </header>
    )
}

export default Header
