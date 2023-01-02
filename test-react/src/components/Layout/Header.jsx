import React from 'react'
import HeaderCartButton from './HeaderCartButton.jsx'
import MealsImage from '../../assets/meals.jpg'

const Header = ({ onModalOpen }) => {
  return (
    <>
      <header className='bg-orange-700 flex justify-around p-4'>
        <h1 className='text-5xl font-medium text-white'>React Meals</h1>
        <HeaderCartButton onModalOpen={onModalOpen} />
      </header>
      <div className=''>
        <img src={MealsImage} className='w-[100%] h-[300px] object-cover' alt="Table fuul of food" />
      </div>
    </>
  )
}

export default Header;