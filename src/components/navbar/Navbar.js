import React, {useContext} from 'react'
import "../../style/navbar.css"
import {
    Link,
  } from "react-router-dom";
import {PicContext} from "../../state/picContext"



export default function Navbar() {
    const {setTags, setColors} = useContext(PicContext);
    const clickHandler =()=>{
        setTags([{value: "null"}]);
        setColors([{value: "null"}]);
        console.log("clicked!")
    }
    return (
        <div>
            <nav className="navbar">
                <div className="container">
                    <ul className="list">
                        <li>
                            <Link onClick={clickHandler} className="list_item" to="/Piclytic/Home">
                                Home
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
