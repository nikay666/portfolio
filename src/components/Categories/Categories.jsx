import React from 'react'
import { triangleDecorSVG } from '../../utilits'
import { Button } from '../Button'
import './Categories.scss'


const Categories = ({categories}) => {
    return (
        <>
         <Button  classes="category filters">Фильтры</Button> 
        <ul className='categories active '>
            <div className='triangle'>{triangleDecorSVG}</div>

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
