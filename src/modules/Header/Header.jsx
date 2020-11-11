import React from 'react'
import { HeaderLink } from '../../components/HeaderLink'
import './Header.scss'



/*  to disable scrolling (class overflow-hidden)
body{
    overflow-y:hidden;
} 
*/

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
            <button className='btn-burger active'><span className='btn-burger__line'></span></button>
        </header>
    )
}

export default Header
