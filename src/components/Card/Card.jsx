import React from 'react'

import './Card.scss'

const Card = ({url, title, href, link, text, tags }) => {

    return (
        <a href={href} className='card card--link' >
            
            <div className="card__font">
                <img className="card__font-img" src={url} alt={title}/>
            </div>

            <div className="card__back">
                <div className="card__wrap">
                    <div className="card__title">
                    <h3 className="card__back-title">{title}</h3>
                    {/* <a className="card__back-link" href={href}>{link}</a> */}
                </div>

                <div className="card__wrap">
                    <h4 className="card__wrap-title">Описание сайта: </h4>
                    <p className="card__wrap-text">{text}</p>
                </div>
                </div>

            <div className="card__wrap">
                <h4 className="card__wrap-title">Технологии: </h4>
                <ul className="tags">
                    {tags.map(( tag, index) => (
                        <li className="tag"
                            key={index}
                            data-tag={tag}
                        >{tag}</li>
                    ))}
                </ul>
            </div>

        </div>
        </a>
    )
}

export default Card
