import React from 'react'

const Meal = ({ id, name, description, price }) => {
  return (
    <li className='font-robotoSlab flex flex-col gap-1'>
        <h3 className='font-semibold'>{name}</h3> 
        <div className='italic text-sm'>{description}</div>
        <div className='font-semibold text-orange-700'>{price.toFixed(2)} $</div>
    </li>
  )
}

export default Meal