import React from 'react'
import "./bar.css"
export default function Bar({value,perc}) {
    console.log("perc", ~~perc)
    const percN = ~~perc
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
