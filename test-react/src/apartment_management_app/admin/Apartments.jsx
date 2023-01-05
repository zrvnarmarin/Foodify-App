import React, { useState } from 'react'
import { apartments } from './database/db'
import NewApartmentForm from './NewApartmentForm.jsx'

const Apartments = () => {
  const statusFilterOptions = ['Free', 'Reserved', 'Occupied']
  const apartmentCities = ['Zadar', 'Biograd Na Moru', 'Split']
  const sortOptions = ['Price', 'Number Of Rooms']

  const changeStatusFilterOptions = (e) => {}
  
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className='p-4 m-8 bg-blue-600'>
      <div className='bg-blue-700  border-2 p-2 mb-8 m-1 flex flex-row flx-wrap items-center justify-between'>
        <div>
          <div className='bg-blue-400 p-2'>
            <label className='pr-2 text-xl text-white uppercase font-medium'>Status</label>
            <select onChange={changeStatusFilterOptions}>
              {statusFilterOptions.map(option => {
                return <option key={option}>{option}</option>
              })}
            </select>
          </div>

          <div className='bg-blue-400 p-2'>
          <label className='pr-2 text-xl text-white uppercase font-medium'>City</label>
            <select onChange={changeStatusFilterOptions}>
              {apartmentCities.map(city => {
                return <option key={city}>{city}</option>
              })}
            </select>
          </div>
        </div>

        <div>
          <div className='bg-blue-400 p-2'>
              <label className='pr-2 text-xl text-white uppercase font-medium'>Sort By</label>
              <select onChange={changeStatusFilterOptions}>
                {sortOptions.map(option => {
                  return <option key={option}>{option}</option>
                })}
              </select>
          </div>
        </div>

      </div>

      <section className='bg-blue-100 border-2 border-white p-2 m-1 flex flex-row flx-wrap items-center justify-between'>
        <table className='border-2 border-black w-full'>
          <thead className=''>
            <tr>
              <td className='p-2 border-2 border-black'>Status</td>
              <td className='p-2 border-2 border-black'>City</td>
              <td className='p-2 border-2 border-black'>Rooms</td>
              <td className='p-2 border-2 border-black'>Single Beds</td>
              <td className='p-2 border-2 border-black'>Double Beds</td>
              <td className='p-2 border-2 border-black'>Price</td>
            </tr>
          </thead>
          <tbody>
            {apartments.map(apartment=> 
              <tr key={apartment.id}>
                <td className='p-2 border-2 border-black'>{apartment.status}</td>
                <td className='p-2 border-2 border-black'>{apartment.city}</td>
                <td className='p-2 border-2 border-black'>{apartment.numberOfRooms}</td>
                <td className='p-2 border-2 border-black'>{apartment.numberOfSingleBeds}</td>
                <td className='p-2 border-2 border-black'>{apartment.numberOfDoubleBeds}</td>
                <td className='p-2 border-2 border-black'>{apartment.price}</td>
                <td className='border-t-2 border-black'>
                  <button className='bg-white text-blue-600 border-t-2 px-4 py-2 font-bold rounded-2xl text-sm mt-8 border-2 border-solid border-black'>Open</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>

      <div className='flex items-center justify-end'>
        <button 
          onClick={openModal} 
          className='bg-white text-blue-600 border-t-2 px-4 py-2 font-bold rounded-2xl text-sm mt-8 border-2 border-solid border-black'
        >
          Add New Apartment
        </button>
      </div>
      { isModalOpen && <NewApartmentForm onCloseModal={closeModal} />}
    </div>
  )
}

export default Apartments