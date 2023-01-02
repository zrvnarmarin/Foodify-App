import React from 'react'

const Input = (props) => {
  return (
    <div className='mb-2'>
      <label 
        htmlFor={props.input.id} 
        className='font-semibold'
      >
        {props.label}
      </label>
      <input className='border-2 ml-2 pl-3 border-gray-300 rounded-xl' {...props.input} />
    </div>
  )
}

export default Input