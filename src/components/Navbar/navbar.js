import React from 'react'
import {Link} from 'react-router-dom'
import './nav.css';
export default function Navbar() {
    return (
        <nav>
            <div className="menuContainer">
            <Link className="menuItem" to='/'>Accueil</Link>
            <Link className="menuItem" to='/figuratif'>Figuratif</Link>
            <Link className="menuItem" to='/abstrait'>Abstrait</Link>
            <Link className="menuItem" to='/about'>A mon propos</Link>
            </div>
        </nav>
    

    )
}