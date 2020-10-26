import React from 'react'
import { Button } from '../Button'

const Categories = ({categories}) => {
    return (
        <div className='categories'>
           {
               categories.map(category => (
               <Button classes="category" id={category.data}>{category.name}</Button>
               ))
           }
        </div>
    )
}

export default Categories
