import React from 'react'
import "./bar.css"
export default function Bar({value,perc}) {
    console.log("perc", ~~perc)
    const percN = ~~perc
    const style ={
            backgroundColor: `${value}`,
            width: `${percN}%`,
            height: "90%",
            left: "0.5%",
            margin: "auto 0",
            position: "relative",
            display: "block",
            alignItems: "left"
    }
    return (
            <div style={style} >
                    <p className="hex-value">{value}</p>
            </div>

    )
}
