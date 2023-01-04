import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Apartments from './Apartments.jsx';
import Tags from './Tags.jsx';
import RegisteredUsers from './RegisteredUsers.jsx'
import Home from './Home.jsx';
import Navbar from './Navbar';

const AdminMainPage = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apartments' element={<Apartments />} />
        <Route path='/registeredUsers' element={<RegisteredUsers />} />
        <Route path='/tags' element={<Tags />} />
      </Routes>
    </>
  )
}

export default AdminMainPage;