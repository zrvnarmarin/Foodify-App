import React from 'react'
import { apartments } from './database/db'

const Apartments = () => {
  const statusFilterOptions = ['Free', 'Reserved', 'Occupied']
  const apartmentCities = ['Zadar', 'Biograd Na Moru', 'Split']
  const sortOptions = ['Price', 'Number Of Rooms']
  const changeStatusFilterOptions = (e) => {}

  return (
    <>
      <div className='bg-blue-700 p-2 m-1 flex flex-row flx-wrap items-center justify-between'>
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
              <label className='pr-2 text-xl text-white uppercase font-medium'>Sort</label>
              <select onChange={changeStatusFilterOptions}>
                {sortOptions.map(option => {
                  return <option key={option}>{option}</option>
                })}
              </select>
          </div>
        </div>

      </div>

      <section>
        <table className='border-2 border-black'>
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
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </>
  )
}

export default Apartments