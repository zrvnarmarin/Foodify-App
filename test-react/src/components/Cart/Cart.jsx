import React, { useState, useContext } from 'react';
import Modal from '../UI/Modal';
import CartContext from '../../store/cartContext';
import CartItem from './CartItem';

const Cart = ({ onModalClose }) => {
    const cartContext = useContext(CartContext)
    const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`
    const hasItems = cartContext.items > 0
    const removeCartItem = (id) => {

    }
    const addCartItem = (item) => {

    }

  return (
    <Modal>
        <ul className='list-none m-0 p-0 max-h-[300px] overflow-scroll overflow-x-hidden'>
            {cartContext.items.map(item => {
                return <CartItem 
                    key={item.id} 
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={removeCartItem}
                    onAdd={addCartItem}
                    className='m-2 text-xl font-bold uppercase'
                >
                    {item.name}
                </CartItem>
            })}
        </ul>
        <div className='flex justify-between items-center font-bold font-md m-2'>
            <span>Total Amount</span>
            <span className='text-2xl'>{totalAmount}</span>
        </div>
        <div className='flex justify-end items-center gap-4 pr-4'>
            <button
                onClick={onModalClose} 
                className='text-lg font-semibold text-orange-500 bg-white rounded-full border-2 border-solid border-orange-500 px-8 py-2'
            >
                Close
            </button>
            { hasItems && <button 
                className='text-lg font-semibold text-white bg-orange-500 rounded-full border-2 border-solid border-orange-500 px-8 py-2'
            >
                Order
            </button>}
        </div>
    </Modal>
  )
}

export default Cart