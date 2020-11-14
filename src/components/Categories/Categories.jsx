import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { triangleDecorSVG } from '../../utilities'
import { Button } from '../Button'
import './Categories.scss'


const Categories = ({categories}) => {
    const  [activeFilters, setActiveFilters] = useState(false)
    const categoriesList = useRef()

    useEffect(() => {
        categoriesList.current.classList.contains('active') && categoriesList.current.classList.remove('active')
    }, [])

    const handlerActiveList = () => {
        setActiveFilters(!activeFilters)

        activeFilters ? categoriesList.current.classList.remove('active') : categoriesList.current.classList.add('active') 
    }

    return (
        <>
         <Button  
            classes="category filters"
            onClick={handlerActiveList}
         >Фильтры</Button> 
        <ul 
            ref={categoriesList}
            className='categories'
        >
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
