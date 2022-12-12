// import React from 'react'
// import { createContext, useState, useContext } from 'react'

// export const MovieContext = createContext()

// export const MovieProvider = (props) => {
// 	const [movies, setMovies] = useState([
// 		{ name: 'Pulp fiction', price: '234', id: 23456 },
// 		{ name: 'Kill Bill 2', price: '567', id: 456 },
// 		{ name: 'Batman', price: '4567', id: 2346 },
// 	])

// 	const [background, setBackground] = useState('green')

// 	return (
// 		<MovieContext.Provider value={[movies, setMovies, background, setBackground]}>
// 			{props.children}
// 		</MovieContext.Provider>
// 	)
// }

// const Movie = () => {
// 	return (
// 		<div>
// 			<MovieData />
// 		</div>
// 	)
// }

// const MovieData = () => {
// 	const [movies, setMovies] = useContext(MovieContext)

// 	return (
// 		<div>
// 			{movies.map(movie => {
// 				return <p 
// 					className='bg-blue-600 text-white text-xl p-4'
// 					key={movie.id}>
// 					{movie.name}
// 				</p>
// 			})}
// 		</div>
// 	)
// }

// const Items = () => {
// 	const [movies, setMovies, background] = useContext(MovieContext)

// 	return (
// 		<div className='bg-red-600 text-white text-xl p-4'>
// 			ALL MOVIES COUNT: {movies.length}
// 			{movies.map(movie => {
// 				return <div key={movie.id} style={{ backgroundColor: `${background}`}}>
// 					<div>{movie.name}</div>
// 					<div>{movie.price}</div>
// 					<div>{movie.id}</div>
// 				</div>
// 			})}
// 		</div>
// 	)
// }

// const AddMovie = () => {
// 	const [movies, setMovies] = useContext(MovieContext)
// 	const [name, setName] = useState('')
// 	const [price, setPrice] = useState('')

// 	const nameInputHandler = e => setName(e.target.value)
// 	const priceInputHandler = e => setPrice(e.target.value)

// 	const addMovieHandler = e => {
// 		e.preventDefault()
// 		setMovies(prev => [...prev, { name: name, price: price, id: Math.floor((1 + Math.random()) * 0x10000)  }])
// 	}

// 	return (
// 		<form onSubmit={addMovieHandler} className='flex flex-co gap-2 bg-blue-800 text-black p-4'>
// 			<input onChange={nameInputHandler} type="text" value={name} name='name' />
// 			<input onChange={priceInputHandler} type="text" value={price} name='price' />
// 			<button>Submit</button>
// 		</form>
// 	)
// }

// const App = () => {
//   return (
// 	<MovieProvider>
// 		<Movie />
// 		<Items />
// 		<AddMovie />
// 	</MovieProvider>
//   )
// }

// export default App

import React, { useState, useContext, useReducer } from 'react'

const ACTIONS = {
	SET_NAME: 'set name',
	RESET_NAME: 'reset name',
	SET_SURNAME: 'set name',
	RESET_SURNAME: 'reset name',
	SET_GENDER: 'set name',
	RESET_GENDER: 'reset name',
	SET_IDENTIFICATION_NUMBER: 'set name',
	RESET_IDENTIFICATION_NUMBER: 'reset name',
	SET_ROOM: 'set name',
	RESET_ROOM: 'reset name',
	SET_DEPARTMENT: 'set name',
	RESET_DEPARTMENT: 'reset name',
	ADD_PATIENT: 'add patient'
}

const reducer = (state, action) => {
	switch(action.type) {
		case ACTIONS.SET_NAME: {
			return {
				...state,
				name: action.payload
			}
		}
		case ACTIONS.RESET_NAME: {
			return {
				...state,
				name: ''
			}
		}
		case ACTIONS.SET_SURNAME: {
			return {
				surname: action.payload,
				...state
			}
		}
		case ACTIONS.RESET_SURNAME: {
			return {
				...state,
				surname: ''
			}
		}
		case ACTIONS.SET_GENDER: {
			return {
				...state,
				gender: action.payload
			}
		}
		case ACTIONS.RESET_GENDER: {
			return {
				...state,
				gender: ''
			}
		}
		case ACTIONS.SET_IDENTIFICATION_NUMBER: {
			return {
				...state,
				identificationNumber: action.payload
			}
		}
		case ACTIONS.RESET_IDENTIFICATION_NUMBER: {
			return {
				...state,
				identificationNumber: ''
			}
		}
		case ACTIONS.SET_ROOM: {
			return {
				...state,
				room: action.payload
			}
		}
		case ACTIONS.RESET_ROOM: {
			return {
				...state,
				room: ''
			}
		}
		case ACTIONS.SET_DEPARTMENT: {
			return {
				...state,
				department: action.payload
			}
		}
		case ACTIONS.RESET_DEPARTMENT: {
			return {
				...state,
				department: ''
			}
		}
		case ACTIONS.ADD_PATIENT: {
			return { ...state, patients: [...state.patients, action.payload]}
		}
	}
}

const App = () => {
	const [state, dispatch] = useReducer(reducer, 
		{ name: '', surname: '', gender: '', identificationNumber: '', roomNumber: '', department: '', patients: []}
	)

	const nameInputHandler = e => dispatch({ type: ACTIONS.SET_NAME, payload: e.target.value })
	const surnameInputHandler = e => dispatch({ type: ACTIONS.SET_SURNAME, payload: e.target.value })
	const genderInputHandler = e => dispatch({ type: ACTIONS.SET_GENDER, payload: e.target.value })
	const identificationNumberInputHandler = e => dispatch({ type: ACTIONS.SET_IDENTIFICATION_NUMBER, payload: e.target.value })
	const roomInputHandler = e => dispatch({ type: ACTIONS.SET_ROOM, payload: e.target.value })
	const departmentInputHandler = e => dispatch({ type: ACTIONS.SET_DEPARTMENT, payload: e.target.value })


	const formSubmitHandler = e => {
		e.preventDefault()

		dispatch({type: ACTIONS.ADD_PATIENT, payload: { 
			id: Math.floor((1 + Math.random()) * 0x10000),
			name: state.name, 
			surname: state.surname,
			gender: state.gender,
			identificationNumber: state.identificationNumber,
			room: state.room,
			department: state.department
		}})

		resetFormInputs()
	}

	const resetFormInputs = () => {
		dispatch({type: ACTIONS.RESET_NAME})
		dispatch({type: ACTIONS.RESET_SURNAME})
		dispatch({type: ACTIONS.RESET_GENDER})
		dispatch({type: ACTIONS.RESET_IDENTIFICATION_NUMBER})
		dispatch({type: ACTIONS.RESET_ROOM})
		dispatch({type: ACTIONS.RESET_DEPARTMENT})
	}

	return (
		<div>
			<form onSubmit={formSubmitHandler} className='bg-red-400 flex flex-col gap-2 justify-center items-center'>
				<input  onChange={genderInputHandler} type="text" placeholder='Unesi spol...' />
				<input onChange={identificationNumberInputHandler} type="text" placeholder='Unesi matični broj...' />
				<input  onChange={roomInputHandler} type="text" placeholder='Unesi broj sobe...' />
				<input  onChange={departmentInputHandler} type="text" placeholder='Unesi unesi broj odjela...' />
				<button>Submit</button>
			</form>
			NAME: {JSON.stringify(state.name)} <br />
			SURNAME: {JSON.stringify(state.surname)}
		</div>
	)
}

export default App;