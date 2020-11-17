import React from 'react'
import ContactItem from '../../components/ContactItem/ContactItem'

const toFirstUpperCase = (string) =>  {
    return string[0].toUpperCase() + string.substring(1)
}

const ContactSection = ({contacts, window}) => {
    const classes = [window ? 'contact__window' : 'contact__content']
    classes.slice(' ')
    return (
        <address className={classes}>
            {
                contacts.map((item, index) => (
                    <ContactItem 
                    key={index}
                    title={toFirstUpperCase(item.type)} 
                    data={item.data}
                    href={item.href}      
                    links={item.links}
                    />
                ))
            }
            
        </address>
    )
}

export default ContactSection
