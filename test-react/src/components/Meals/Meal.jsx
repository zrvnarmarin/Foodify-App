import React from 'react'
import MealForm from './MealForm'

const Meal = ({ id, name, description, price }) => {
  return (
    <li className='font-robotoSlab flex flex-row justify-between items-center gap-1'>
      <div>
        <h3 className='font-semibold'>{name}</h3>
        <div className='italic text-sm'>{description}</div>
        <div className='font-semibold text-orange-700'>{price.toFixed(2)} $</div>
      </div>
      <div>
        <MealForm />
      </div>
    </li>
  )
}

export default Meal