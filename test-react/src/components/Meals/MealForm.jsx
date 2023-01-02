import React, { useRef, useState } from 'react'
import Input from '../UI/Input'

const MealForm = ({ onAddToCart }) => {
  const [isAmountValid, setIsAmountValid] = useState(true)
  const amountInputRef = useRef()

  const submitHandler = e => {
    e.preventDefault()

    const enteredAmount = amountInputRef.current.value
    const enteredAmountNumber = +enteredAmount

    if (enteredAmountNumber.length === 0 ||
    enteredAmountNumber < 1 ||
    enteredAmountNumber > 5) {
      setIsAmountValid(false)
    }

    console.log(enteredAmountNumber)

    onAddToCart(enteredAmountNumber)
  }

  return (
    <form
      onSubmit={submitHandler}
      className='flex flex-col'>
      <Input 
        ref={amountInputRef}
        label="Amount" 
        input={{ 
          id: 'amount',
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1'
        }} 
      />
      <button className='font-robotoSlab rounded-3xl bg-orange-400 text-white px-8 py-2'>+ Add</button>
      { !isAmountValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  )
}

export default MealForm