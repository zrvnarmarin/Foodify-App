import React, { useContext } from 'react'
import CartIcon from '../../assets/cart.svg'
import CartContext from '../../store/cartContext'

const HeaderCartButton = ({ onModalOpen }) => {
  const cartContext = useContext(CartContext)
  const numberOfCartItems = cartContext.items.reduce((curr, item) => {
    return curr + item.amount
  }, 0)

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
        <span className='bg-orange-300 rounded-xl px-3'>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton;