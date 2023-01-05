import React from 'react'
import NewApartmentModal from './NewApartmentModal'
import { tags } from './database/db'
import { useReducer } from 'react'
import { useContext } from 'react'
import ApartmentContext from './store/apartmentContext'

const ACTIONS = {
    SET_TITLE: 'set title',
    SET_DESCRIPTION: 'set description',
    SET_ADDRESS: 'set address',
    SET_CITY: 'set city',
    SET_NUMBER_OF_ROOMS: 'set number of rooms',
    SET_NUMBER_OF_SINGLE_BEDS: 'set number of single beds',
    SET_NUMBER_OF_DOUBLE_BEDS: 'set number of double beds',
    SET_PRICE: 'set price',
    SET_DISTANCE_FROM_THE_SEA: 'set distance from the sea',
    SET_TAG: 'set tag',
    SET_NEW_APARTMENT: 'set new apartment'
}

const apartmentReducer = (state, action) => {
    switch(action.type) {
        case ACTIONS.SET_TITLE: {
            return {...state, title: action.payload.title}
        }
        case ACTIONS.SET_DESCRIPTION: {
            return {...state, description: action.payload.description}
        }
        case ACTIONS.SET_ADDRESS: {
            return {...state, address: action.payload.address}
        }
        case ACTIONS.SET_CITY: {
            return {...state, city: action.payload.city}
        }
        case ACTIONS.SET_NUMBER_OF_ROOMS: {
            return {...state, numberOfRooms: action.payload.numberOfRooms}
        }
        case ACTIONS.SET_NUMBER_OF_SINGLE_BEDS: {
            return {...state, numberOfSingleBeds: action.payload.numberOfSingleBeds}
        }
        case ACTIONS.SET_NUMBER_OF_DOUBLE_BEDS: {
            return {...state, numberOfDoubleBeds: action.payload.numberOfDoubleBeds}
        }
        case ACTIONS.SET_PRICE: {
            return {...state, price: action.payload.price}
        }
        case ACTIONS.SET_DISTANCE_FROM_THE_SEA: {
            return {...state, distanceFromTheSea: action.payload.distanceFromTheSea}
        }
        case ACTIONS.SET_TAG: {
            return {...state, tag: action.payload.tag}
        }
        case ACTIONS.SET_NEW_APARTMENT: {
            return {...state, apartment: {
                title: state.title,
                description: state.description,
                address: state.address,
                city: state.city,
                numberOfRooms: state.numberOfRooms,
                numberOfSingleBeds: state.numberOfSingleBeds,
                numberOfDoubleBeds: state.numberOfDoubleBeds,
                distanceFromTheSea: state.distanceFromTheSea, 
                price: state.price,
                tag: state.tag
            }}
        }
    }
}

const NewApartmentForm = ({ onCloseModal }) => {
    const [state, dispatch] = useReducer(apartmentReducer, { apartment: {}, title: '', description: '', address: '', city: '', 
    numberOfRooms: 0, numberOfSingleBeds: 0, numberOfDoubleBeds: 0, distanceFromTheSea: 0, price: 0, tag: '' })

    const apartmentContext = useContext(ApartmentContext)
    
    const submitFormHandler = (e) => {
        e.preventDefault()

        dispatch({ type: ACTIONS.SET_NEW_APARTMENT })
        apartmentContext.addApartment(state.apartment)
    }
    

  return (
    <NewApartmentModal>
        <div className='bg-white border-2 border-black p-4 rounded-xl'>
            <h1 className='text-4xl flex items-center justify-center uppercase pb-12'>Add New Apartment</h1>
            <form onSubmit={submitFormHandler} className='flex flex-col gap-4'>
                <div className='flex flex-row flex-wrap items-center justify-between gap-2'>
                    <label>Title: </label>
                    <input 
                    onChange={(e) => dispatch({ type: ACTIONS.SET_TITLE, payload: { title: e.target.value} })} 
                    className='border-black border-2 p-1 rounded' type="text" />
                </div>
                <div className='flex flex-row flex-wrap items-center justify-between gap-2'>
                    <label>Description: </label>
                    <input
                    onChange={(e) => dispatch({ type: ACTIONS.SET_DESCRIPTION, payload: { description: e.target.value} })} 
                    className='border-black border-2 p-1 rounded' type="text" />
                </div>
                <div className='flex flex-row flex-wrap items-center justify-between gap-2'>
                    <label>Address: </label>
                    <input
                    onChange={(e) => dispatch({ type: ACTIONS.SET_ADDRESS, payload: { address: e.target.value} })} 
                    className='border-black border-2 p-1 rounded' type="text" />
                </div>
                <div className='flex flex-row flex-wrap items-center justify-between gap-2'>
                    <label>City: </label>
                    <input
                    onChange={(e) => dispatch({ type: ACTIONS.SET_CITY, payload: { city: e.target.value} })} 
                    className='border-black border-2 p-1 rounded' type="text" />
                </div>
                <div className='flex flex-row flex-wrap items-center justify-between gap-2'>
                    <label>Number of rooms: </label>
                    <input 
                    onChange={(e) => dispatch({ type: ACTIONS.SET_NUMBER_OF_ROOMS, payload: { numberOfRooms: e.target.value} })} 
                    className='border-black border-2 p-1 rounded' type="text" />
                </div>
                <div className='flex flex-row flex-wrap items-center justify-between gap-2'>
                    <label>Number of single beds: </label>
                    <input 
                    onChange={(e) => dispatch({ type: ACTIONS.SET_NUMBER_OF_SINGLE_BEDS, payload: { numberOfSingleBeds: e.target.value} })} 
                    className='border-black border-2 p-1 rounded' type="text" />
                </div>
                <div className='flex flex-row flex-wrap items-center justify-between gap-2'>
                    <label>Number of double beds: </label>
                    <input 
                    onChange={(e) => dispatch({ type: ACTIONS.SET_NUMBER_OF_DOUBLE_BEDS, payload: { numberOfDoubleBeds: e.target.value} })} 
                    className='border-black border-2 p-1 rounded' type="text" />
                </div>
                <div className='flex flex-row flex-wrap items-center justify-between gap-2'>
                    <label>Distance from the sea: </label>
                    <input 
                    onChange={(e) => dispatch({ type: ACTIONS.SET_DISTANCE_FROM_THE_SEA, payload: { distanceFromTheSea: e.target.value} })} 
                    className='border-black border-2 p-1 rounded' type="text" />
                </div>
                <div className='flex flex-row flex-wrap items-center justify-between gap-2'>
                    <label>Price: </label>
                    <input
                    onChange={(e) => dispatch({ type: ACTIONS.SET_PRICE, payload: { price: e.target.value} })} 
                    className='border-black border-2 p-1 rounded' type="text" />
                </div>
                <div className='flex flex-row flex-wrap items-center justify-between gap-2'>
                    <label>Tags: </label>
                    <select 
                    onChange={(e) => dispatch({ type: ACTIONS.SET_TAG, payload: { tag: e.target.value} })} 
                    className='border-2 border-black rounded p-1'>
                        {tags.map(tag =>
                            <option key={tag} value={tag}>{tag}</option>
                        )}
                    </select>
                </div>
            <div className='flex items-center justify-around'>
                <button 
                type='submit'
                className='bg-blue-600 text-white border-t-2 px-4 py-2 font-bold rounded-2xl text-sm mt-8 border-2 border-solid
                 border-black'
                >
                    Add New Apartment
                </button>
                <button 
                    type='button'
                    onClick={onCloseModal} 
                    className='bg-red-600 text-white border-t-2 px-4 py-2 font-bold rounded-2xl text-sm mt-8 border-2 border-solid
                    border-black'
                >
                    Close
                </button>
            </div>
            </form>
            
        </div>
    </NewApartmentModal>
  )
}

export default NewApartmentForm