import React from 'react'
import { HeaderLink } from '../../components/HeaderLink'
import './Header.scss'

const Header = ({links}) => {
    return (
        <header className="header">
            <nav className="header__nav">
                <ul className="header__nav-list">
                        {
                            links.map((obj, index) => (
                                <HeaderLink 
                                    key={index}
                                    to={obj.to}
                                    name={obj.name}
                                />
                            ))
                        }                    
                </ul>
            </nav>
        </header>
    )
}

export default Header
