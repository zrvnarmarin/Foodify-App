import React from 'react'

const Login = () => {
  return (
    <div className="grid h-screen place-items-center bg-blue-400">
      <form className='border-2 border-solid p-2 rounded-xl flex flex-col w-1/2 bg-blue-600'>
        <label className=''>Username</label>
        <input className='border-2 border-solid border-black p-1' type="text" />
        <br />
        <label>Password</label>
        <input className='border-2 border-solid border-black p-1' type="text" />
        <button className='bg-white text-blue-600 px-8 py-2 rounded-2xl text-xl mt-8 border-2 border-solid border-black'>Login</button>
      </form>
    </div>
  )
}

export default Login