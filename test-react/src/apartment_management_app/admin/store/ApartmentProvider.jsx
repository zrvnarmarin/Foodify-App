import React from 'react'
import { useReducer } from 'react'
import ApartmentContext from './apartmentContext'

const ACTIONS = {
    ADD_APARTMENT: 'add apartment',
    REMOVE_APARTMENT: 'remove apartment'
}

const apartmentReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_APARTMENT: {
            return {}
        }
        case ACTIONS.REMOVE_APARTMENT: {
            return {}
        }
    }
}

const ApartmentProvider = (props) => {
    const [state, dispatch] = useReducer(apartmentReducer, {
        apartments: [], totalAmount: 0
    })

    const apartmentContext = {
        apartments: state.apartments,
        totalAmount: state.totalAmount
    }

    return (
        <ApartmentContext.Provider value={apartmentContext}>
            {props.children}
        </ApartmentContext.Provider>
    )
}

export default ApartmentProvider;