import React, { useState, useReducer, useRef } from 'react'

const ACTIONS = {
  SET_NAME: 'set name',
  SET_DEPARTMENT: 'set department',
  SET_PHONE: 'set phone',
  RESET_NAME: 'reset name',
  RESET_DEPARTMENT: 'reset department',
  RESET_PHONE: 'reset phone',
  ADD_EMPLOYEE: 'add employee', 
  EDIT_EMPLOYEE: 'edit employee',
  DELETE_EMPLOYEE: 'delete employee'
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_NAME: {
      return { ...state, name: action.payload }
    }
    case ACTIONS.SET_DEPARTMENT: {
      return { ...state, department: action.payload }
    }
    case ACTIONS.SET_PHONE: {
      return { ...state, phone: action.payload }
    }
    case ACTIONS.RESET_NAME: {
      return { ...state, name: '' }
    }
    case ACTIONS.RESET_DEPARTMENT: {
      return { ...state, department: '' }
    }
    case ACTIONS.RESET_PHONE: {
      return { ...state, phone: '' }
    }
    case ACTIONS.ADD_EMPLOYEE: {
     return { ...state, employees: [...state.employees, action.payload] }
    }
    case ACTIONS.DELETE_EMPLOYEE: {
      return { ...state, employees: state.employees.filter(employee => employee.id !== action.payload.id) }
    }
  }
}

const EmployeesTable = () => {
  const [state, dispatch] = useReducer(reducer, { name: '', department: '', phone: '', employees: [] })
  const [isNewEmployeeShown, setIsNewEmployeeShown] = useState(false)
  const buttonRef = useRef()

  const toggleNewEmployee = () => {
    if (!isNewEmployeeShown) { buttonRef.current.disabled = true }
    setIsNewEmployeeShown(prev => !prev)
  } 

  const submitHandler = e => {
    e.preventDefault()

    if (state.name === '' || state.department === '' || state.phone === '') return

    resetInputs()
    dispatch({
      type: ACTIONS.ADD_EMPLOYEE, 
      payload: {id: Math.floor((1 + Math.random()) * 0x10000), name: state.name, department: state.department, phone: state.phone }
    })

    setIsNewEmployeeShown(false)
    buttonRef.current.disabled = false 
  }

  const deleteNewEmployeeForm = () => {
    buttonRef.current.disabled = false
    setIsNewEmployeeShown(false)
    resetInputs()
  }

  const resetInputs = () => {
    dispatch({type: ACTIONS.RESET_NAME})
    dispatch({type: ACTIONS.RESET_PHONE})
    dispatch({type: ACTIONS.RESET_DEPARTMENT})
  }

  const nameChangeHandler = e => dispatch({type: ACTIONS.SET_NAME, payload: e.target.value})
  const departmentChangeHandler = e => dispatch({type: ACTIONS.SET_DEPARTMENT, payload: e.target.value})
  const phoneChangeHandler = e => dispatch({type: ACTIONS.SET_PHONE, payload: e.target.value})
  
  return (
    <div>

      <div className='flex fle-row justify-between p-2'>
        <h1 className='text-4xl font-robotoSlab'>Employee Details</h1>
        <button 
          ref={buttonRef} 
          onClick={toggleNewEmployee} 
          className={`rounded-3xl text-white font-robotoSlab opacity-50 
           bg-emerald-500 px-4 py-2 font-medium 
           ${isNewEmployeeShown ? 'opacity-50' : 'opacity-100'}`}
        >
          + Add New
        </button>
      </div>

      <table className='m-2'>
        <thead>
          <tr>
            <td className='border-[1px] border-gray-200 text-black text-xl font-medium font-robotoSlab p-2 pr-12'>Name</td>
            <td className='border-[1px] border-gray-200 text-black text-xl font-medium font-robotoSlab p-2 pr-12'>Department</td>
            <td className='border-[1px] border-gray-200 text-black text-xl font-medium font-robotoSlab p-2 pr-12'>Phone</td>
            <td className='border-[1px] border-gray-200 text-black text-xl font-medium font-robotoSlab p-2 pr-12'>Actions</td>
          </tr>
        </thead>

        <tbody>
          {state.employees.map(employee => 
            <tr key={employee.id}>
              <td className='border-[1px] border-gray-200 text-black text-xl font-normal font-robotoSlab p-2'>{employee.name}</td>
              <td className='border-[1px] border-gray-200 text-black text-xl font-normal font-robotoSlab p-2'>{employee.department}</td>
              <td className='border-[1px] border-gray-200 text-black text-xl font-normal font-robotoSlab p-2'>{employee.phone}</td>
              <td className='p-2 flex flex-row flex-wrap items-center justify-center gap-1 border-r-[1px] border-b-[1px] border-gray-200'>
                <button className='rounded-3xl text-white font-robotoSlab bg-yellow-500 px-4 py-2 font-medium'>Edit</button>
                <button onClick={() => {
                  dispatch({ type: ACTIONS.DELETE_EMPLOYEE, payload: { id: employee.id } })
                }} className='rounded-3xl text-white font-robotoSlab bg-red-500 px-4 py-2 font-medium'>Delete</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>

      { isNewEmployeeShown && 
        <form onSubmit={submitHandler}>
            <input value={state.name} onChange={nameChangeHandler} className='border-gray-300 border-[1px] p-1' type="text" />
            <input value={state.department} onChange={departmentChangeHandler} className='border-gray-300 border-[1px] p-1' type="text" />
            <input value={state.phone} onChange={phoneChangeHandler} className='border-gray-300 border-[1px] p-1' type="text" />
            <button type='submit' className='rounded-3xl text-white font-robotoSlab bg-blue-500 px-4 py-2 font-medium'>Add</button>
            <button onClick={deleteNewEmployeeForm} type='button' className='rounded-3xl text-white font-robotoSlab bg-red-500 px-4 py-2 font-medium'>Delete</button>
        </form>
      }
      {/* <div className='bg-gree-300'>
        STATES: 
        <p>1. name: {state.name}</p>
        <p>2. department: {state.department}</p>
        <p>3. phone: {state.phone}</p>
      </div>
      ALL EMPLOYEES: {JSON.stringify(state.employees)} */}

    </div>
  )
}

export default EmployeesTable