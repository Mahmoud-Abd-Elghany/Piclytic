import React from 'react'
import { useSelector } from 'react-redux'
import TagElement from "../tag-element/tag-element.component"
import "./tags-grid.style.scss"

const TagsGrid = () => {
    const {tags} = useSelector(state => state.analysis);
    return (
        <div className="bar_container">
                {
                    tags.map((tag, index) => {
                        if(index > 20){
                        return <div></div>
                        }
                        return <TagElement name={tag.name} key={tag.id}/>
                    })
                }
        </div>
    )
}

export default TagsGrid
