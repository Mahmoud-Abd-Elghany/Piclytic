import React, {useContext} from 'react'
import {PicContext} from "../../state/picContext"
import "./color-grid.style.scss"
import ColorBar from "../color-bar/color-bar.component"

const ColorGrid = () => {
    const {colors} = useContext(PicContext)
    const barlist = colors.map((color) => {
        if(color.value > 0.01)
        return <ColorBar value= {color.raw_hex} perc={(color.value)*100}/>
    })
    return (
        <div className="bar-container">
                {barlist}       
        </div>
    )
}

export default ColorGrid
