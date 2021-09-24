import React from 'react'

export default function HogDetails({specialty, greased, weight}) {
    
    return (
        <div>
            <h4>Hog Details</h4>
            <p>Specialty: {specialty}</p>
            <p>Weight: {weight}</p>
            <p>{greased ? 'Greased' : 'Not Greased'}</p>
        </div>
    )
}