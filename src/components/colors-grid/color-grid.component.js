import React from 'react'
import { useSelector } from 'react-redux'
import "./color-grid.style.scss"
import ColorBar from "../color-bar/color-bar.component"

const ColorGrid = () => {
    const {colors} = useSelector(state => state.analysis)
    return (
        <div className="bar-container">
        {
            colors.map((color) => {
                if(color.value > 0.02){
                    return <ColorBar hex_value= {color.raw_hex} perc={(color.value)}/>
                }
                return <div></div>
            })
        }      
        </div>
    )
}

export default ColorGrid
