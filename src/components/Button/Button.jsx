import React from 'react'
import './Button.scss'

const getClasses = (classes) =>  {
    const classNames = ['button']
    classes && classNames.push(classes)
    const className = classNames.join(' ')

    return className
}

const Button = ({children, classes, onClick = null}) => {
    const className = getClasses(classes)

    const onClickEvent = (e) => {
        onClick && onClick(e)
    }

    return (
        <button 
            onClick={onClickEvent}
            className={className}
        >
            {children}
        </button>
    )
}

export default Button
