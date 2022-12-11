import React from 'react'
import { createContext, useState, useContext } from 'react'

export const MovieContext = createContext()

export const MovieProvider = (props) => {
	const [movies, setMovies] = useState([
		{ name: 'Pulp fiction', price: '234', id: 23456 },
		{ name: 'Kill Bill 2', price: '567', id: 456 },
		{ name: 'Batman', price: '4567', id: 2346 },
	])

	return (
		<MovieContext.Provider value={[movies, setMovies]}>
			{props.children}
		</MovieContext.Provider>
	)
}

const Movie = () => {
	return (
		<div>
			<MovieData />
		</div>
	)
}

const MovieData = () => {
	const [movies, setMovies] = useContext(MovieContext)

	return (
		<div>
			{movies.map(movie => {
				return <p 
					className='bg-blue-600 text-white text-xl p-4'
					key={movie.id}>
					{movie.name}
				</p>
			})}
		</div>
	)
}

const Items = () => {
	const [movies, setMovies] = useContext(MovieContext)
	return (
		<div className='bg-red-600 text-white text-xl p-4'>
			ALL MOVIES COUNT: {movies.length}
			{movies.map(movie => {
				return <div key={movie.id}>
					<div>{movie.name}</div>
					<div>{movie.price}</div>
					<div>{movie.id}</div>
				</div>
			})}
		</div>
	)
}

const AddMovie = () => {
	const [movies, setMovies] = useContext(MovieContext)
	const [name, setName] = useState('')
	const [price, setPrice] = useState('')

	const nameInputHandler = e => setName(e.target.value)
	const priceInputHandler = e => setPrice(e.target.value)

	const addMovieHandler = e => {
		e.preventDefault()
		setMovies(prev => [...prev, { name: name, price: price, id:  }])
	}

	return (
		<form onSubmit={addMovieHandler} className='flex flex-co gap-2 bg-blue-800 text-black p-4'>
			<input onChange={nameInputHandler} type="text" value={name} name='name' />
			<input onChange={priceInputHandler} type="text" value={price} name='price' />
			<button>Submit</button>
		</form>
	)
}

const App = () => {
  return (
	<MovieProvider>
		<Movie />
		<Items />
		<AddMovie />
	</MovieProvider>
  )
}

export default App