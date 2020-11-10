import React, {useContext} from 'react'
import TagElement from "../tagElement/TagElement"
import {PicContext} from "../../../../state/picContext"
import "./tagBar.css"

export default function TagBar() {
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
