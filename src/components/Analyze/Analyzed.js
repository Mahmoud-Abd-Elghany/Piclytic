import React, {useContext} from 'react'
import "../../style/analyzed.css"
import {PicContext} from "../../state/picContext"
import TagBar from "./analyzedComponents/tagBar/TagBar"
import ColorBar from "./analyzedComponents/colorBar/ColorBar"
import {withRouter} from "react-router-dom";

const Analyzed = (props) => {
    const {tags, colors, image} = useContext(PicContext);
    console.log("tags",tags)
    console.log("colors", colors)
    const style = {
        backgroundImage: `url(${image})`,
    }
    const redirect = () =>{
        props.history.push('/Piclytic/invalid')
    }
    if (tags[0].value === "null" && colors[0].value === "null"){
        redirect();
    }

    return (
        <div className="grid-container">
            <div className="img-container" style ={style}>
                <img src={image}  alt="img" className="img" />
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

export default withRouter(Analyzed)