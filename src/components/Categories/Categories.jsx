import React from 'react'
import { Button } from '../Button'
import './Categories.scss'

const Categories = ({categories}) => {
    return (
        <ul className='categories'>

           {
                categories.map((category, index) => (
                <li   key={index}  className="categories__item">
                    <Button 
                        classes="category" 
                        id={category.data}
                    >{category.name}</Button>
                </li>
               ))
           }
           <Button  classes="category filters" >Фильтры</Button> 
        </ul>
    )
}

export default Categories
