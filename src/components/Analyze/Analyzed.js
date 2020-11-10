import React, {useContext} from 'react'
import "../../style/analyzed.css"
import {PicContext} from "../../state/picContext"
import TagBar from "./analyzedComponents/tagBar/TagBar"
import ColorBar from "./analyzedComponents/colorBar/ColorBar"

const Analyzed = () => {
    const {tags, colors, image} = useContext(PicContext);
    console.log("tags",tags)
    console.log("colors", colors)
    console.log()
    
    return (
        <div className="grid-container">
            <div className="img-container">
                <img src={image} alt="img" className="img"/>
            </div>
            <div className="tagBar">
                <TagBar />
            </div>
            <div className="colorBar">
                <ColorBar/>
            </div>
                
        </div>
    )
}

export default Analyzed