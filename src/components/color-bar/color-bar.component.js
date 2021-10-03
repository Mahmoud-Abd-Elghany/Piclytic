import React from 'react'
import "./color-bar.style.scss"


const ColorBar = ({value,perc}) => {
    const percN = ~~perc+1
    const style ={
            backgroundColor: `${value}`,
            width: `${percN}%`,
    }
    return (
            <div style={style} className="style_continue" >
                    <p className="hex-value">{value}</p>
            </div>

    )
}

export default ColorBar
