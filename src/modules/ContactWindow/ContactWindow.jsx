import React from 'react'
import ContactItem from '../../components/ContactItem/ContactItem'
import { githubSVG, instagramSVG, telegramSVG } from '../../utilits'

const contactItems = [
    {title: 'Телефон', href: 'tel:+79998094720', data: '8(999)809-47-20'},
    {title: 'Email', href: 'mailto:lilit666an@gmail.com', data: 'lilit666an@gmail.com'},
    {title: 'Fl.ru', href:'fl.ru/' ,data: 'fl.ru/'},
    {title: 'Соц. сети', links: [
        {href: '8(999)999-99-99', data: telegramSVG},
        {href: 'https://www.instagram.com/', data: instagramSVG },
        {href: 'https://github.com/nikay666', data: githubSVG},
    ]},

]

const ContactWindow = () => {
    return (
        <div className="contact__window">
            {
                contactItems.map((item, index) => (
                    <ContactItem 
                        key={index}
                        title={item.title} 
                        data={item.data}
                        href={item.href}      
                        links={item.links}
                    />
                ))
            }
            
        </div>
    )
}

export default ContactWindow
