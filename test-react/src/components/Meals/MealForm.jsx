import React from 'react'
import Input from '../UI/Input'

const MealForm = (props) => {
  return (
    <form className='flex flex-col'>
        <Input 
        label="Amount" 
        input={{ 
            id: 'amount',
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
        }} />
        <button className='font-robotoSlab rounded-3xl bg-orange-400 text-white px-8 py-2'>+ Add</button>
    </form>
  )
}

export default MealForm