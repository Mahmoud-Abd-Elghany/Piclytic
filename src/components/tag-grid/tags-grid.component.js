import React from 'react'
import { useSelector } from 'react-redux'
import TagElement from "../tag-element/tag-element.component"
import "./tags-grid.style.scss"

const TagsGrid = () => {
    const {tags} = useSelector(state => state.analysis);
    return (
        <div className="bar_container">
            <div className="bar">
                {
                    tags.map((tag, index) => {
                        while(index<20){
                        return <TagElement name={tag.name} key={tag.id}/>
                        }
                    })
                }
            </div>
        </div>
    )
}

export default TagsGrid
