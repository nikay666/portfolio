import React from 'react'
import { Button } from '../Button'
import './Categories.scss'

const Categories = ({categories}) => {
    return (
        <>
         <Button  classes="category filters">Фильтры</Button> 
        <ul className='categories active '>
            <span className='triangle'></span>

           {
                categories.map((category, index) => (
                <li key={index}  className="categories__item ">
                    <Button 
                        classes="category" 
                        id={category.data}
                    >{category.name}</Button>
                </li>
               ))
           }
         
        </ul>
        </>
    )
}

export default Categories
