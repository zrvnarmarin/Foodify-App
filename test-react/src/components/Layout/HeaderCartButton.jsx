import React from 'react'
import CartIcon from '../../assets/cart.svg'

const HeaderCartButton = ({ onModalOpen }) => {
  return (
    <button 
      onClick={onModalOpen}
      className='flex flex-row gap-4 items-center text-white text-xl shadow-xl font-medium bg-orange-400 rounded-3xl px-4'
    >
      <img 
      className='h-[25px] w-[25px]' 
      src={CartIcon} 
      />
        <span className=''>Your Cart</span>
        <span className='bg-orange-300 rounded-xl px-3'>3</span>
    </button>
  )
}

export default HeaderCartButton;