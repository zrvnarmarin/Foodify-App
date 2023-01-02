import React from 'react'
import { meals } from '../../data/meals'
import Meal from './Meal.jsx'
import Card from '../UI/Card'

const AvailableMeals = () => {
  return (
    <div>
        {meals.map(meal => {
        return <ul key={meal.id} className='flex flex-col bg-white p-4'>
            <Meal
                id={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
            />
        </ul>
    })}</div>
  )
}

export default AvailableMeals