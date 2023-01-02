import React, { forwardRef } from 'react'

const Input = forwardRef((props, ref) => {
  return (
    <div className='mb-2'>
      <label 
        htmlFor={props.input.id} 
        className='font-semibold'
      >
        {props.label}
      </label>
      <input 
        {...props.input} 
        ref={ref}
        className='border-2 ml-2 pl-3 border-gray-300 rounded-xl' 
      />
    </div>
  )
}) 

export default Input