import React from 'react'
import "./tag-element.style.scss"

const TagElement = ({name}) => {
    return (
        <div className='element-container'>
            <div className="element">
                {name}
            </div>
        </div>
    )
}

export default TagElement
