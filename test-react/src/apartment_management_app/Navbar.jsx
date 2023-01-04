import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='p-4 text bg-blue-600'>
        <ul className='flex items-center justify-around gap-12 '>
          <li><Link to="/apartments">Apartments</Link></li>
          <li><Link to="/registeredUsers">Registered Users</Link></li>
          <li><Link to="tags">Tags</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar