import React, { useState, createContext, useContext } from 'react';

const MovieContext = createContext();

const MovieProvider = (props) => {
	const [movies, setMovies] = useState([
		{ id: 1, name: 'Tenet', price: '10'},
		{ id: 2, name: 'Kill Bill 2', price: '20'},
		{ id: 3, name: 'The dark knight', price: '40'}
	])

	return(
		<MovieContext.Provider value={[movies, setMovies]}>
			{props.children}
		</MovieContext.Provider>
	)
}

const Movie = () => {
	const [movies, setMovies] = useContext(MovieContext)
	return (
		<div>
			{movies.map(movie => (
				<div key={movie.id} className='border-solid border-2 border-black'>
					<p>ID: {movie.id}</p>
					<p>NAME: {movie.id}</p>
					<p>PRICE:{movie.id}</p>
				</div>
			))}
		</div>
	)
}

const Nav = () => {
	const [movies, setMovies] = useContext(MovieContext)

	return (
		<p className='bg-red-200'>NUMBER OF MOVIES: {movies.length}</p>
	)
}

const App = () => {
	
	
	return(
		<MovieProvider>
			<Movie />
			<Nav />
		</MovieProvider>
	)
	
}

export default App;