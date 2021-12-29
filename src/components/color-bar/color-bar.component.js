import React from 'react'
import "./color-bar.style.scss"


const ColorBar = ({perc, hex_value}) =>{
        perc *= 100;
        const percN = ~~perc + 1;
        const style ={
                backgroundColor: `${hex_value}`,
                width: `${percN}%`,
        }
    return (
            <div style={style} className="style_continue" >
                    <p className="hex-value">
                        <span>{hex_value}</span>
                        <span className='copy-icon' onClick={() => {navigator.clipboard.writeText(hex_value)}}>&#128203;</span>
                    </p>
                    
            </div>

    )
}

export default ColorBar
