import React, {useContext} from 'react'
import {PicContext} from "../../../../state/picContext"
import "./colorBar.css"
import Bar from "./Bar"

export default function ColorBar() {
    const {colors} = useContext(PicContext)
    const barlist = colors.map((color) => {
        if(color.value > 0.01)
        return <Bar value= {color.raw_hex} perc={(color.value)*100}/>
    })
    return (
        <div className="bar-container">
                {barlist}       
        </div>
    )
}
