import React from 'react'
import { tags } from './database/db'

const Tags = () => {
  return (
    <div className='bg-blue-600 p-4 mt-8 mx-8'>
      <ul className='list-disc bg-white px-8 p-4 m-8 border-2 border-black'>
        {tags.map(tag =>
          <li className='text-2xl text-black'>
            <a href="">{tag} (2)</a>
          </li>
        )}
      </ul>
      <div className='flex items-center justify-end'>
        <button className='bg-white text-blue-600 border-t-2 px-4 py-2 font-bold rounded-2xl text-sm mx-8 border-2 border-solid border-black'>Add New Tag</button>
      </div>
    </div>
  )
}

export default Tags