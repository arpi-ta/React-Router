import React from 'react'
import {Link} from 'react-router-dom';
export default function Nav() {
    const navStyle={
        color:'white',
        textDecoration:'none'
    }
    return (
        <nav>
            <h1>Logo</h1>
            <ul className="nav-link">
                <Link style={navStyle} to="/about">
                <li className="link">About</li>
                </Link>
                <Link style={navStyle} to="/shop">
                <li className="link">Shop </li>
                </Link>
            </ul>
            
        </nav>
    )
}
