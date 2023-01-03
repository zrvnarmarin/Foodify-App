import CartContext from "./cartContext";
import React, { useReducer } from "react";

const ACTIONS = {
    ADD_ITEM: 'add item',
    REMOVE_ITEM: 'remove item'
}

const cartReducer = (state, action) => {
    switch(action.type) {
        case ACTIONS.ADD_ITEM: {
            const existingCartItemIndex = state.items.findIndex(item => item.id === action.payload.id)
            const existingCartItem = state.items[existingCartItemIndex]
            let updatedItem, updatedItems

            if (existingCartItem) {
                updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.payload.amount
                }
                updatedItems = [...state.items]
                updatedItems[existingCartItemIndex] = updatedItem
            } else {
                updatedItem = {...action.payload}
                updatedItems = [...state.items, updatedItem]
            }

            return {
                totalAmount: state.totalAmount + action.payload.amount * action.payload.price, 
                items: updatedItems
            }
        }
        case ACTIONS.REMOVE_ITEM: {
            const existingCartItemIndex = state.items.findIndex(item => item.id === action.payload)
            const existingItem = state.items[existingCartItemIndex]
            const updatedTotalAmount = state.totalAmount - existingItem.price
            let updatedItems

            if (existingItem.amount === 1) {
                // delete item from array
                updatedItems = state.items.filter(item => item.id !== action.payload)
            } else {
                // keep the item in the cart, but decrease the amount
                const updatedItem = {...existingItem, amount: existingItem.amount - 1}
                updatedItems = [...state.items]
                updatedItems[existingCartItemIndex] = updatedItem
            }

            return { 
                totalAmount: updatedTotalAmount,
                items: updatedItems
            }
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