import React from 'react'
import { useState } from 'react'
import HogDetails from './HogDetails'

export default function HogImage({name, image, hog}) {
    const [isVisible, setIsVisible] = useState(false)
    
    return (
        <div>
            <h3>{name}</h3>
            <img src={image} alt="PigImage"/>
            <button onClick= {() => setIsVisible(!isVisible)}>{isVisible ? 'Hide Details' : 'Show Details'}</button>
            {isVisible ? <HogDetails specialty={hog.specialty} greased={hog.greased} weight={hog.weight}/> : null}
        </div>
    )
}