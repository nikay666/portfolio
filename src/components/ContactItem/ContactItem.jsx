import React from 'react'

const ContactItem = ({title, data, href, links}) => {

    return (
        <div className="contact__item">
            <span className="title">{title}: </span>
            {
                links ? 
                links.map((link, index) => (
                    <a  
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon"
                        key={index} 
                        href={link.href}
                    ><img src={link.data} alt={title}/></a>
                ))  
                : <a 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="data" 
                    href={href}
                >{data}</a>
            }
        </div>
    )
}

export default ContactItem
