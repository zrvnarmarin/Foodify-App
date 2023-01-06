import React from 'react'
import { useReducer } from 'react'
import ApartmentContext from './apartmentContext'

const ACTIONS = {
    ADD_APARTMENT: 'add apartment',
    REMOVE_APARTMENT: 'remove apartment',
    SHOW_APARTMENT_INFO: 'show apartment info'
}

const apartmentReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.ADD_APARTMENT: {
            return {...state, apartments: [...state.apartments, action.payload]}
        }
        case ACTIONS.REMOVE_APARTMENT: {
            return {...state, apartments: state.apartments.filter(apartment => apartment.id !== action.payload)}
        }
        case ACTIONS.SHOW_APARTMENT_INFO: {
            // ovdje treba ici modal za svaki poseni apartman 
            return {...state}
        }
    }
}

const ApartmentProvider = (props) => {
    const [state, dispatch] = useReducer(apartmentReducer, { apartments: [] })

    const addApartmentToList = (apartment) => dispatch({ type: ACTIONS.ADD_APARTMENT, payload: apartment })
    const removeApartmentFromList = (id) => dispatch({ type: ACTIONS.REMOVE_APARTMENT, payload: id})
    const showApartmentInfo = (apartment) => dispatch({ type: ACTIONS.SHOW_APARTMENT_INFO, payload: apartment})

    const apartmentContext = {
        apartments: state.apartments,
        currentlySelectedApartment: state.currentlySelectedApartment,
        addApartment: addApartmentToList,
        removeApartment: removeApartmentFromList,
        showCurrentlySelectedApartment: showApartmentInfo
    }

    return (
        <ApartmentContext.Provider value={apartmentContext}>
            {props.children}
        </ApartmentContext.Provider>
    )
}

export default ApartmentProvider;