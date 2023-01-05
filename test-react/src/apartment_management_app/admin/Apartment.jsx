import React from 'react'
import { useState, useContext } from 'react'
import ApartmentContext from './store/apartmentContext'

const Apartment = ({ title, description, status, city, numberOfRooms, numberOfSingleBeds, numberOfDoubleBeds, distanceFromTheSea, price, tag,
    onOpenInfo }) => {
    const apartmentContext = useContext(ApartmentContext)

    const showSomeData = () => {
        apartmentContext.showCurrentlySelectedApartment({
            title: title,
            numberOfRooms: numberOfRooms,
            city: city, 
            description: description,
            numberOfDoubleBeds: numberOfDoubleBeds,
            numberOfSingleBeds: numberOfSingleBeds,
            numberOfRooms: numberOfRooms, 
            distanceFromTheSea: distanceFromTheSea,
            price: price, 
            tag: tag
        })
    }
  return (
    <>
        <tr>
            <td className='p-2 border-2 border-black'>{status}</td>
            <td className='p-2 border-2 border-black'>{city}</td>
            <td className='p-2 border-2 border-black'>{numberOfRooms}</td>
            <td className='p-2 border-2 border-black'>{numberOfSingleBeds}</td>
            <td className='p-2 border-2 border-black'>{numberOfDoubleBeds}</td>
            <td className='p-2 border-2 border-black'>{price}</td>
            <td className='border-t-2 border-black'>
                <button onClick={showSomeData} className='bg-white text-blue-600 border-t-2 px-4 py-2 font-bold rounded-2xl text-sm mt-8 border-2 border-solid border-black'>Open</button>
            </td>
        </tr>
    </>
  )
}

export default Apartment