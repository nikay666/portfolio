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
        //TODO: итерируемые компоненты анимировать внутри  компонента
        //TEST
        
    }, [])


    return (
        <section className="works content" id={id} >
            <h2 ref={blockTitle} className="h2">{title}</h2>
            {
                categories ? 
                <Categories startAnimations={blockCategories} categories={categories}/>
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
