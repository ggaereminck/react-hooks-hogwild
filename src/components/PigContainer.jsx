import React from 'react'
import hogs from '../porkers_data'
import HogImage from './HogImage'
import { useState } from 'react'
export default function PigContainer() {
    console.log(hogs)
    function GreasedHogs(){
        {hogs.filter(hog => hog.greased === true).map(filteredHog => {
            return (
            <li>
                {filteredHog.name}
            </li>
            )}
        )}
    }
    return (
        <>
            <div>
            <button onClick= {GreasedHogs()}>Greased Hogs</button>
                {hogs.map(hog => {
                    return <HogImage hog={hog} name= {hog.name} image ={hog.image}/>
                })}
            </div>
        </>
    )
}

