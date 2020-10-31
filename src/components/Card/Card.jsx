import React from 'react'

import './Card.scss'

const Card = ({url, title, href, link, text, tags }) => {

    return (
        <div className='card' >
            
            <div className="card__font">
                <img className="card__font-img" src={url} alt={title}/>
            </div>

            <div className="card__back">
                <div className="card__back-top">
                    <div className="card__title">
                    <h3 className="card__back-title">{title}</h3>
                    <a className="card__back-link" href={href}>{link}</a>
                </div>

                <div className="card__block">
                    <h4 className="card__block-title">Описание сайта: </h4>
                    <p className="card__block-text">{text}</p>
                </div>
                </div>

            <div className="card__block">
                <h4 className="card__block-title">Технологии: </h4>
                <ul className="card__block-tags">
                    {tags.map(( tag, index) => (
                        <li className="card__block-tag"
                            key={index}
                            data-tag={tag}
                        >{tag}</li>
                    ))}
                </ul>
            </div>

        </div>
        </div>
    )
}

export default Card
