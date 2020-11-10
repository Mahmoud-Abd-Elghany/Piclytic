import React from 'react'
import "../../style/navbar.css"
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <div className="container">
                    <ul className="list">
                        <li>
                            <Link className="list_item" to="/">
                                Home
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
