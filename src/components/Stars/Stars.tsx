import React from 'react';
import Star from '../Star/Star.tsx';
import './stars.css'

interface StarCounter {
    count: number
}

export default function Stars({ count = 0} : StarCounter) {
    if (count < 1 || count > 5) {
        return
    }

    const numOfStars = new Array(count).fill('');
    
    return (
        <ul className="card-body-stars u-clearfix">
           {numOfStars.map(index => (
                <Star key={index}/>
           ))}
        </ul>
    )
}