import React from 'react'

const ContactItem = ({title, data, href, links}) => {
    return (
        <div className="contact__window-item">
            <span className="title">{title}: </span>
            {
                links ? 
                links.map((link, index) => (
                    <a  
                        className="icon"
                        key={index} 
                        href={link.href}
                    >{link.data}</a>
                ))  
                : <a 
                    className="data" 
                    href={href}
                >{data}</a>
                
                
            }
        </div>
    )
}

export default ContactItem
