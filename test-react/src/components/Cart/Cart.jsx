import React from 'react'
import { useState } from 'react'
import Modal from '../UI/Modal'

const Cart = ({ onModalClose }) => {

  const cartItems = [
    { id: 1, name: 'sushi', amount: 2, price: 12.99 },
  ]
  return (
    <Modal>
        <ul className='list-none m-0 p-0 overflow-auto'>
            {cartItems.map(item => {
                return <li key={item.id} className='m-2 text-xl font-bold uppercase'>{item.name}</li>
            })}
        </ul>
        <div className='flex justify-between items-center font-bold font-md m-2'>
            <span>Total Amount</span>
            <span className='text-2xl'>35.62</span>
        </div>
        <div className='flex justify-end items-center gap-4 pr-4'>
            <button
                onClick={onModalClose} 
                className='text-lg font-semibold text-orange-500 bg-white rounded-full border-2 border-solid border-orange-500 px-8 py-2'
            >
                Close
            </button>
            <button 
                className='text-lg font-semibold text-white bg-orange-500 rounded-full border-2 border-solid border-orange-500 px-8 py-2'
            >
                Order
            </button>
        </div>
    </Modal>
  )
}

export default Cart