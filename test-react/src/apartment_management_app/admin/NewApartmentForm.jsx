import React from 'react'
import NewApartmentModal from './NewApartmentModal'
import { tags } from './database/db'

const NewApartmentForm = ({ onCloseModal }) => {

  return (
    <NewApartmentModal>
        <div className='bg-white border-2 border-black p-4 rounded-xl'>
            <h1 className='text-4xl flex items-center justify-center uppercase pb-12'>Add New Apartment</h1>
            <form onSubmit={formSubmitHandler} className='flex flex-col gap-4'>
                <div className='flex flex-row flex-wrap items-center justify-between gap-2'>
                    <label>Title: </label>
                    <input className='border-black border-2 p-1 rounded' type="text" />
                </div>
                <div className='flex flex-row flex-wrap items-center justify-between gap-2'>
                    <label>Description: </label>
                    <input className='border-black border-2 p-1 rounded' type="text" />
                </div>
                <div className='flex flex-row flex-wrap items-center justify-between gap-2'>
                    <label>Address: </label>
                    <input className='border-black border-2 p-1 rounded' type="text" />
                </div>
                <div className='flex flex-row flex-wrap items-center justify-between gap-2'>
                    <label>City: </label>
                    <input className='border-black border-2 p-1 rounded' type="text" />
                </div>
                <div className='flex flex-row flex-wrap items-center justify-between gap-2'>
                    <label>Number of rooms: </label>
                    <input className='border-black border-2 p-1 rounded' type="text" />
                </div>
                <div className='flex flex-row flex-wrap items-center justify-between gap-2'>
                    <label>Number of single beds: </label>
                    <input className='border-black border-2 p-1 rounded' type="text" />
                </div>
                <div className='flex flex-row flex-wrap items-center justify-between gap-2'>
                    <label>Number of double: </label>
                    <input className='border-black border-2 p-1 rounded' type="text" />
                </div>
                <div className='flex flex-row flex-wrap items-center justify-between gap-2'>
                    <label>Distance from the sea: </label>
                    <input className='border-black border-2 p-1 rounded' type="text" />
                </div>
                <div className='flex flex-row flex-wrap items-center justify-between gap-2'>
                    <label>Price: </label>
                    <input className='border-black border-2 p-1 rounded' type="text" />
                </div>
                <div className='flex flex-row flex-wrap items-center justify-between gap-2'>
                    <label>Tags: </label>
                    <select className='border-2 border-black rounded p-1'>
                        {tags.map(tag =>
                            <option key={tag} value={tag}>{tag}</option>
                        )}
                    </select>
                </div>
            </form>

            <div className='flex items-center justify-around'>
                <button className='bg-blue-600 text-white border-t-2 px-4 py-2 font-bold rounded-2xl text-sm mt-8 border-2 border-solid border-black'>Add New Apartment</button>
                <button onClick={onCloseModal} className='bg-red-600 text-white border-t-2 px-4 py-2 font-bold rounded-2xl text-sm mt-8 border-2 border-solid border-black'>Close</button>
            </div>
        </div>
    </NewApartmentModal>
  )
}

export default NewApartmentForm