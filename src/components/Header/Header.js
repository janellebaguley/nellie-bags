import React from 'react'
import {Link, withRouter } from 'react-router-dom'
import Cart from '../assets/cart-2.jpg'

function Header(){
    return(
        <div>
            <h1>Nellie Bags</h1>
            <Link to = '/'>Home</Link>
            <Link to = '/bags'>Bags</Link>
            <Link to = '/dolls'>Dolls</Link>
            <Link to = '/scarves'>Scarves</Link>
            <Link to = '/humble-hotties'>HumbleHotties</Link>
            <Link to = '/contact'>Contact</Link>
            <Link to = '/checkout'><img/></Link>
            <img src={Cart} alt='Cart'/>
        </div>
    )
}
export default withRouter(Header)