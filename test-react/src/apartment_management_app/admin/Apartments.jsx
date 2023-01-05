import React, { useState, useContext } from 'react'
import NewApartmentForm from './NewApartmentForm.jsx'
import ApartmentContext from './store/apartmentContext'
import Apartment from './Apartment.jsx'

const Apartments = () => {
  const statusFilterOptions = ['Free', 'Reserved', 'Occupied']
  const apartmentCities = ['Zadar', 'Biograd Na Moru', 'Split']
  const sortOptions = ['Price', 'Number Of Rooms']

  const apartmentContext = useContext(ApartmentContext)
  const { apartments } = apartmentContext

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
              <Apartment 
                key={apartment.name}
                status={apartment.status} 
                city={apartment.city} 
                numberOfRooms={apartment.numberOfRooms} 
                numberOfSingleBeds={apartment.numberOfSingleBeds}
                numberOfDoubleBeds={apartment.numberOfDoubleBeds}
                price={apartment.price}
              />
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