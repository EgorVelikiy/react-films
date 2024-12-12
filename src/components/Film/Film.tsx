import React from 'react'
import Stars from '../Stars/Stars.tsx'
import './film.css'

type FilmInfo = {
    title: string,
    price: number,
}

export default function Film({ title, price } : FilmInfo) {
    return (
        <div className="film-container">
            <div className="img-container">
                <img src='https://i.pinimg.com/736x/74/2a/0a/742a0ac3602e3c55bba9a6a65f9200e9.jpg' alt=""/>
            </div>
            <div className='main-info'>
                <div className="title">{title}</div>
                <Stars count={5} />
                <div className="more">
                    <button className="buy-btn">Купить {price} ₽</button>
                    <button className='more-info'>ПОДРОБНЕЕ</button>
                </div>
            </div>
        </div>
    )
}