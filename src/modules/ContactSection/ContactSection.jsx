import React from 'react'
import ContactItem from '../../components/ContactItem/ContactItem'
import ContactSectionLoader from './ContactSectionLoader'

const toFirstUpperCase = (string) =>  {
    return string[0].toUpperCase() + string.substring(1)
}

const ContactSection = ({contacts, window}) => {
    const classes = [window ? 'contact__window' : 'contact__content']
    classes.slice(' ')
    console.log(classes)
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
