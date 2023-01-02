import React from 'react'
import MealForm from './MealForm'
import { useContext } from 'react'
import CartContext from '../../store/cartContext'

const Meal = ({ id, name, description, price }) => {
  const cartContext = useContext(CartContext)
  
  const addToCartHandler = amount => {
    cartContext.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price
    })
  }

  return (
    <li className='font-robotoSlab flex flex-row justify-between items-center gap-1'>
      <div>
        <h3 className='font-semibold'>{name}</h3>
        <div className='italic text-sm'>{description}</div>
        <div className='font-semibold text-orange-700'>{price.toFixed(2)} $</div>
      </div>
      <div>
        <MealForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  )
}

export default Meal