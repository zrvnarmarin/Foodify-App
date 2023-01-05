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
            return {...state, apartments: [...state.apartments, action.payload]}
        }
        case ACTIONS.REMOVE_APARTMENT: {
            return {...state, apartments: state.apartments.filter(apartment => apartment.id !== action.payload)}
        }
    }
}

const ApartmentProvider = (props) => {
    const [state, dispatch] = useReducer(apartmentReducer, { apartments: [] })

    const addApartmentToList = (apartment) => dispatch({ type: ACTIONS.ADD_APARTMENT, payload: apartment })
    const removeApartmentFromList = (id) => dispatch({ type: ACTIONS.REMOVE_APARTMENT, payload: id})

    const apartmentContext = {
        apartments: state.apartments,
        totalAmount: state.totalAmount,
        addApartment: addApartmentToList,
        removeApartment: removeApartmentFromList
    }

    return (
        <ApartmentContext.Provider value={apartmentContext}>
            {props.children}
        </ApartmentContext.Provider>
    )
}

export default ApartmentProvider;

// title: '', description: '', address: '', city: '', numberOfRooms: 0, numberOfSingleBeds: 0, numberOfDoubleBeds: 0, 
//         distanceFromTheSea: 0, price: 0, tags: []