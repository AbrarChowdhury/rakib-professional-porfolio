import React from 'react'
import './navbar.styles.css'
import { Link } from 'react-scroll'
function Navbar() {
    return (
        <div>
            <nav className = 'navbar'>
                <ul class=''>
                    <li><Link to="print" smooth={true} duration={500}>Print</Link></li>
                    <li><Link to="tvc" smooth={true} duration={500}>TVC</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
