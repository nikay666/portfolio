import React from 'react'
import { ContactSection } from '../../modules/ContactSection'

const Contact = ({contacts}) => {
    return (
        <section className="contact content">
        <h2 className="h2">Контакты</h2>
           <ContactSection contacts={contacts}/>
        </section>
    )
}
export default Contact
