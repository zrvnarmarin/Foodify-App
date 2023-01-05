import React from 'react'
import NewApartmentModal from './NewApartmentModal'

const ApartmentInfo = ({ title, address, description, distanceFromTheSea, status, city, numberOfRooms, numberOfSingleBeds, numberOfDoubleBeds, price, onCloseInfo }) => {
    const closeModal = () => onCloseInfo()
  return (
    <NewApartmentModal>
        <div>
            <p>TITLE: {title}</p>
            <p>ADDRESS: {address}</p>
            <p>DESCRIPTION: {description}</p>
            <p>DISTANCE FROM THE SEA: {distanceFromTheSea}</p>
            <p>CITY: {city}</p>
            <p>NUMBER OF ROOMS: {numberOfRooms}</p>
            <p>NUMBER OF SINGLE BEDS: {numberOfSingleBeds}</p>
            <p>NUMBER OF DOUBLE BEDS: {numberOfDoubleBeds}</p>
            <p>PRICE: {price}</p>

            <button
                onClick={closeModal}
                className='bg-red-600 text-white border-t-2 px-4 py-2 font-bold rounded-2xl text-sm mt-8 border-2 border-solid'
            >
                Close
            </button>
        </div>
    </NewApartmentModal>
  )
}

export default ApartmentInfo