import React from 'react'

export const categories = [
    {name: 'Все', data: 'all'},
    {name: 'Лендинги', data: 'lending'},
    {name: 'Многостраничные сайты', data: 'cites'},
    {name: 'WordPress', data: 'wordpress'},
    {name: 'Разное', data: 'other'},    
]
  
export const links = [
    {name: 'Главная', to: '/' }, 
    {name: 'Работы', to: '/works' }, 
    {name: 'Мой codopen', to: '/codopen' }, 
    {name: 'Контакты', to: '/contact' }, 
]

export const  urlWorks = '/data/works.json'
export const urlContacts = '/data/contacts.json'
export const  urlCodopen = '/data/codopen.json'

export const checkForError = response => {
  if (!response.ok) throw Error(response.statusText)
  return response
};

export const getResponse = (url, set) => {
  fetch(url)
    .then(checkForError)
    .then(res => res.json())
    .then(json => set(json))
    .catch(error =>  {
      console.log('Error', error)
    })
}

export const triangleDecorSVG = (
    <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.29947 2.74701C6.08136 1.48396 7.91864 1.48396 8.70053 2.74701L13.5 10.5H9.5H6.5H5H0.5L5.29947 2.74701Z" fill="white"/>
    <path d="M13.1244 9.75L8.76064 2.7317C7.97808 1.47308 6.14627 1.47309 5.36371 2.7317L1 9.75M2.90013 6.69396L5.36371 2.7317C6.14627 1.47309 7.97808 1.47308 8.76064 2.7317L11.2242 6.69396" stroke="black"/>
    </svg>
)
