import React from 'react'
import { Button } from '../../components/Button'
import Iframe from './Iframe'

const Codopens = ({id, title, codopens}) => {
    console.log(codopens)
    return (
        <section className="works content" id={id} >
            <h2 className="h2">{title}</h2>
        
            <div className="content__items">
                {
                codopens.map((codopen, index) => (
                   <div key={index}>
                       <Iframe  iframe={codopen.iframe} />
                   </div>

                   
                ))
                }
            </div>
            <div className='content__see-more'>
                <Button>Посмотреть больше</Button>
            </div>
        </section>
    )
}

export default Codopens
