import React from 'react'
import "./tagElement.css"

export default function TagElement({name}) {
    return (
        <div className="element">
            {name}
        </div>
    )
}
