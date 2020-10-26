import React from 'react'
import Categories from '../../components/Categories/Categories'

const Works = ({title, id, categories}) => {
    return (
        <section className="works" id={id} >
            <h2 className="h2">{title}</h2>
            {
                categories ? 
                <Categories categories={categories}/>
                : null
            }

        </section>
    )
}

export default Works
