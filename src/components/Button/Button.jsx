import React from 'react'
import './Button.scss'

const Button = ({children, classes}) => {
    const classNames = ['button']
    classes && classNames.push(classes)
    const className =  classNames.join(' ')

    return (
        <button className={className}>
            {children}
        </button>
    )
}

export default Button
