import React from 'react'
import { useDispatch } from 'react-redux';
import { clearData } from '../../redux/analysis/analysis.actions'
import "./navbar.style.scss"
import {
    Link,
  } from "react-router-dom";



const Navbar = () => {
    const dispatch = useDispatch()
    const clickHandler =()=>{
        dispatch(clearData());
    }
    return (
        <div>
            <nav className="navbar">
                    <ul className="list">
                        <li>
                            <Link onClick={clickHandler} className="list_item" to="/">
                                Home
                            </Link>
                        </li>
                    </ul>
            </nav>
        </div>
    )
}

export default Navbar
