import React, {useContext} from 'react'
import TagElement from "../tag-element/tag-element.component"
import {PicContext} from "../../state/picContext"
import "./tags-grid.style.scss"

const TagsGrid = () => {
    const {tags} = useContext(PicContext);
    const tag = tags.map((tag, index) => {
        if(index<20){
        return(
            <div>
                <TagElement name={tag.name} key={tag.id}/>
            </div>
        )
        }
    })
    
    return (
        <div className="bar_container">
            <div className="bar">
                {tag}
            </div>
        </div>
    )
}

export default TagsGrid
