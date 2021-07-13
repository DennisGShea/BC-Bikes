import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

function Footer() {
    return (
    <footer>
        <p>&copy;2021 DGS </p>
     <h3>Links</h3>
     <ul>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/">shop</Link></li>
         <li><Link to="/">Sell</Link></li>
         <li><Link to="/">about</Link></li>
        </ul>
    </footer>
    )
}

export default Footer 
