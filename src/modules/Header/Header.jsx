import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { HeaderLink } from '../../components/HeaderLink'
import './Header.scss'


const activeClass = 'active'

const toggleNavMenu = (nav, active) =>  {
     //overflow-hidden - to disable scrolling
    if(active) {
        document.body.classList.remove('overflow-hidden')
        nav.current.classList.remove(activeClass)
    } else {
        document.body.classList.add('overflow-hidden')
        nav.current.classList.add(activeClass) 
    }
}


const Header = ({links}) => {
    const [activeBurger, setActiveBurger] = useState(false)
    const navMenu = useRef()

    useEffect(() => {
        navMenu.current.classList.contains(activeClass) &&  navMenu.current.classList.remove(activeClass)
    }, [])

    const handlerActiveBurger = (e) => {
        setActiveBurger(!activeBurger)

        e.target.classList.toggle(activeClass)
        toggleNavMenu(navMenu, activeBurger)
    }

    return (
        <header className="header">
            <nav ref={navMenu} className="header__nav">
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
            <button 
                aria-label='Меню'
                className='btn-burger'
                onClick={handlerActiveBurger}
            ><span className='btn-burger__line'></span></button>
        </header>
    )
}

export default Header
