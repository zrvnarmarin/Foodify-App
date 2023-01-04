import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='p-4 text bg-blue-600'>
        <ul className='flex items-center justify-around gap-12 text-xl text-white uppercase font-medium'>
          <li><Link to="/apartments">Apartments</Link></li>
          <li><Link to="/registeredUsers">Registered Users</Link></li>
          <li><Link to="/tags">Tags</Link></li>
          <button className='bg-white text-blue-600 px-8 py-2 rounded-2xl text-xl mt-8 border-2 border-solid border-black'>Logout</button>
        </ul>
    </nav>
  )
}

export default Navbar