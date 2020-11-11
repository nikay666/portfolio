import React from 'react'
import './List.scss'

const List = ({items}) => {
    return (
        <ul className="list">
            {
                items.map((item, index) => (
                    <li className="list__item" key={index}>{item}</li>
                ))
            }
        </ul>
    )
}

export default List
