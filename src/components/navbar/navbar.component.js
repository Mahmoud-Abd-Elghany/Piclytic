import React, {useContext} from 'react'
import "./navbar.style.scss"
import {
    Link,
  } from "react-router-dom";
import {PicContext} from "../../state/picContext"



const Navbar = () => {
    const {setTags, setColors} = useContext(PicContext);
    const clickHandler =()=>{
        setTags([{value: "null"}]);
        setColors([{value: "null"}]);
    }
    return (
        <div>
            <nav className="navbar">
                <div className="container">
                    <ul className="list">
                        <li>
                            <Link onClick={clickHandler} className="list_item" to="/">
                                Home
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
