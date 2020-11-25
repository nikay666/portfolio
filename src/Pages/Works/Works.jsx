import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { Button } from '../../components/Button'
import Card from '../../components/Card'
import Categories from '../../components/Categories/Categories'
import  {setAnimationFor}  from '../../utilities'


const Works = ({title, id, categories, works}) => {
    const blockTitle = useRef()
    const blockCategories = useRef()
    const  blockCard = useRef()

    useEffect(()  => { 
        setAnimationFor(blockTitle.current)
        setAnimationFor(blockCategories.current)
        // setAnimationFor(blockCard.current) TODO: как получить доступ к итерируемым элементам (DOM)
        
    }, [])

    return (
        <section ref={blockTitle} className="works content" id={id} >
            <h2 className="h2">{title}</h2>
            {
                categories ? 
                <Categories ref={blockCategories} categories={categories}/>
                : null
            }
            <div className="content__items">
               {
                works.map((work, index) => (
                    <Card
                        ref={blockCard}
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
