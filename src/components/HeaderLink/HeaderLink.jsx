import React from 'react'
import { Link } from 'react-router-dom'

const HeaderLInk = ({to, name}) => {
    return (
        <li className="header__nav-item">
        <Link 
            className="header__nav-link" 
            to={to}
        >{name}</Link>
    </li>
    )
}

export default HeaderLInk
