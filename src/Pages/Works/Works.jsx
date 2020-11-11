import React from 'react'
import { Button } from '../../components/Button'
import Card from '../../components/Card'
import Categories from '../../components/Categories/Categories'


const Works = ({title, id, categories, works}) => {
    return (
        <section className="works content" id={id} >
            <h2 className="h2">{title}</h2>
            {
                categories ? 
                <Categories categories={categories}/>
                : null
            }
            <div className="content__items">
               {
                works.map((work, index) => (
                    <Card
                        key={index}
                        url={work.url}
                        href={work.href}
                        title={work.title}
                        link={work.link}
                        text={work.text}
                        tags={work.tags}
                    />
                ))
                }
            </div>
            <div className='content__see-more'>
                <Button>Посмотреть больше</Button>
            </div>
        </section>
    )
}

export default Works
