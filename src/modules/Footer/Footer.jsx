import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'

const Footer = ({links}) => {
    return (
        <footer className='footer content'> 
            <div className="footer__top">
                <nav className="footer__nav">
                {
                    links.map((link, index) => (
                    <Link
                        className="footer__nav-link"
                        key={index}
                        to={link.to}
                    >{link.name}</Link>
                    ))
                }
                </nav>
            </div>
            <div className="footer__bottom">
                <p className="byLove">Made by <span role='img' aria-label='love'>❤️</span></p>
                <div className="sourseBy">
                    Icons made by 
                    <a href="https://www.flaticon.local/authors/freepik" title="Freepik"> Freepik</a> 
                </div>
            </div>
        </footer>
    )
}

export default Footer
