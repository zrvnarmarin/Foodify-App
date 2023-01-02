import React from 'react'
import AvailableMeals from './AvailableMeals'
import MealsSummary from './MealsSummary'

const Meals = () => {
  return (
    <div className='flex flex-col w-3/4 justify-center'>
      <MealsSummary />
      <AvailableMeals />
    </div>
  )
}

export default Meals