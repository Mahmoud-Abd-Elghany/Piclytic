import React from 'react'
import "./tag-element.style.scss"

const TagElement = ({name}) => {
    return (
        <div className="element">
            {name}
        </div>
    )
}

export default TagElement
