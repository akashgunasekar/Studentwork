import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <ul className='nav'  >
            <li> <Link to="/"  >Home</Link>   </li>
            <li>  <Link to="/product"  > Product  </Link>  </li>
            <li> <Link to="/cart"  > Cart  </Link>   </li>

        </ul>

    </div>
  )
}
