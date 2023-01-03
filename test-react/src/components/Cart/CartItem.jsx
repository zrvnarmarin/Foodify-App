import React from 'react'

const CartItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;
  
    return (
      <li className='flex items-center justify-between border-b-2 border-solid p-1 m-1'>
        <div>
          <h2 className='font-bold text-xl pb-1'>{props.name}</h2>
          <div className='flex items-center justify-between gap-4'>
            <span className='font-bold text-orange-400'>{price}</span>
            <span className='font-bold border-2 border-grey-100 rounded-lg px-2 text-orange-400'>x {props.amount}</span>
          </div>
        </div>

        <div className='flex flex-row'>
          <button className='font-bold text-xl rounded-lg border-2 hover:bg-orange-400 border-orange-400 px-2 m-1 cursor-pointer' onClick={props.onRemoveItem}>−</button>
          <button className='font-bold text-xl rounded-lg border-2 hover:bg-orange-400 border-orange-400 px-2 m-1 cursor-pointer' onClick={props.onAddItem}>+</button>
        </div>
      </li>
    );
  };
  
  export default CartItem;
  