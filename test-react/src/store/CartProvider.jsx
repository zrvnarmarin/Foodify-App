import CartContext from "./cartContext";
import React, { useReducer } from "react";

const ACTIONS = {
    ADD_ITEM: 'add item',
    REMOVE_ITEM: 'remove item'
}

const cartReducer = (state, action) => {
    switch(action.type) {
        case ACTIONS.ADD_ITEM: {
            return {
                totalAmount: state.totalAmount + action.payload.amount * action.payload.price, 
                items: [...state.items, action.payload] 
            }
        }
        case ACTIONS.REMOVE_ITEM: {
            return {}
        }
    }
}

const CartProvider = (props) => {
    const [state, dispatch] = useReducer(cartReducer, { items: [], totalAmount: 0 })

    const addItemToCart = (item) => dispatch({ type: ACTIONS.ADD_ITEM, payload: item })
    const removeItemToCart = (id) => dispatch({ type: ACTIONS.REMOVE_ITEM, payload: id })

    const cartContext = {
        items: state.items,
        totalAmount: state.totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemToCart
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;

// const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)
//             const existingCartItem = state.items[existingCartItemIndex]
//             let updatedItems;

//             if (existingCartItem) {
//                 const updatedItem = {
//                     ...existingCartItem,
//                     amount: existingCartItem.amount + action.payload.item.amount
//                 }
//                 updatedItems = [...state.items]
//                 updatedItems[existingCartItemIndex] = updatedItem
//             } else {
//                 updatedItems = state.items.concat(action.items) 
//             }

//             return {
//                 totalAmount: state.totalAmount + action.payload.amount * action.payload.price, 
//                 items: updatedItems
//             }