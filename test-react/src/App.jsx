// import { useReducer, useState } from "react";


// const ACTIONS = {
// 	INCREASE_TASK_ID: 'increase id',
// 	SET_TASK: 'set task',
// 	RESET_TASK: 'reset task',
// 	ADD_TASK: 'add task',
// 	DELETE_TASK: 'delete task',
// 	EDIT_TASK: 'edit task',
// 	FINISHED_TODO: 'finished todo',
// 	SET_FILTER: 'set filter',
// 	FILTERED_TASKS: 'filtered tasks'
// }

// function tasksReducer (state, action) {
// 	switch (action.type) {
// 		case ACTIONS.SET_TASK: {
// 			return { ...state, task: action.payload }
// 		}
// 		case ACTIONS.RESET_TASK: {
// 			return { ...state, task: '' }
// 		}
// 		case ACTIONS.INCREASE_TASK_ID: {
// 			return { ...state, id: state.id + 1}
// 		}
// 		case ACTIONS.ADD_TASK: {
// 			return { ...state, tasks: [...state.tasks, action.payload] }
// 		}
// 		case ACTIONS.DELETE_TASK: {
// 			return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload.id) }
// 		}
// 		case ACTIONS.EDIT_TASK: {
// 			return {
// 				...state,
// 				tasks: state.tasks.map(task => {
// 					if (task.id === action.payload.id) {
// 						return {...task, task: action.payload.task}
// 					}
// 					return task
// 				})
// 			}
// 		}
// 		case ACTIONS.FINISHED_TODO: {
// 			return { ...state, tasks: state.tasks.map(task => {
// 				if (task.id === action.payload.id) {
// 					return {...task, finished: !task.finished }
// 				}
// 				return task
// 			}) }
// 		}
// 		case ACTIONS.SET_FILTER: {
// 			return { ...state, filter: action.payload.filter }
// 		}
// 		case ACTIONS.FILTERED_TASKS: {
// 			return { ...state, tasks: state.tasks.filter(task => {
// 				if (action.payload.filter === 'all') return task
// 				if (action.payload.filter === 'finished') return task.finished === true
// 			})}
// 		}
// 	}
// }

// const createFilteredTasks = (filter, tasks) => {
// 	const allTasks = tasks.map(task => { return task })
// 	const finishedTasks = tasks.filter(task => task.finished === true)
// 	const activeTasks = tasks.filter(task => task.finished === false)

// 	if (filter === 'all') return allTasks
// 	if (filter === 'finished') return finishedTasks
// 	if (filter === 'active') return activeTasks
// }

// const App = () => {
// 	const [state, dispatch] = useReducer(tasksReducer, { task: '', id: 0, tasks: [], isEditing: false, filter: 'all' })
// 	const [isTaskTableShown, setIsTaskTableShown] = useState(false)
// 	const [isEditButtonsShown, setIsEditButtonsShown] = useState(false)
// 	const [editedInputValue, setEditedInputValue] = useState('')

// 	const inputHandler = (e) => {
// 		dispatch({ type: ACTIONS.SET_TASK, payload: e.target.value })
// 	}

// 	const enableTaskEditing = () => setIsEditButtonsShown(true)
// 	const cancelTaskEditing = () => setIsEditButtonsShown(false)
// 	const showTaskTableHandler = () => setIsTaskTableShown(prev => !prev)

// 	const editTaskInputHandler = (e) => {
// 		console.log(e.target.value)
// 		setEditedInputValue(e.target.value)
// 	}

// 	const submitHandler = (e) => {
// 		e.preventDefault()
// 		if (state.task === '') return

// 		dispatch({ type: ACTIONS.RESET_TASK })
// 		dispatch({ type: ACTIONS.INCREASE_TASK_ID })
// 		dispatch({ type: ACTIONS.ADD_TASK, payload: { id: state.id, task: state.task, finished: false }})
// 		setIsTaskTableShown(true)
// 	}

// 	const setTaskFilterHandler = (e) => {
// 		console.log(e.target.value)
// 		dispatch({ type: ACTIONS.FILTERED_TASKS, payload: { filter: e.target.value }})
// 	}

// 	return (
// 		<div className="font-robotoSlab">
// 			<h1 className="text-center font-semibold text-4xl">To Do App</h1>
// 			<form onSubmit={submitHandler} className='flex gap-2'>
// 				<input
// 					className=" m-4 p-2 border-[1px] border-slate-300 rounded-md placeholder-slate-600 outline-black outline-2"
// 					type="text"
// 					placeholder="Enter a task here"
// 					onChange={inputHandler}
// 					value={state.task}
// 				/>
// 				<button className="uppercase m-5 p-2 rounded-md font-lg bg-blue-600 text-white font-medium">Add Task</button>
// 			</form>
// 			<div className="flex gap-6 m-4">
// 				<button 
// 					onClick={showTaskTableHandler} 
// 					className="uppercase p-2 rounded-md font-lg bg-green-500 text-white font-medium"
// 				>
// 					{ !isTaskTableShown ? 'Show Tasks' : 'Hide Tasks' }
// 				</button>
// 				<select onChange={setTaskFilterHandler} className="border-2 border-black pl-2 rounded-md">
// 					<option value="all">All</option>
// 					<option value="active">Active</option>
// 					<option value="finished">Finished</option>
// 				</select>
// 				{ isEditButtonsShown && <input onChange={editTaskInputHandler} placeholder="Enter updated value" className="flex border-black border-2 pl-2 rounded-md" />}
// 			</div>
// 			{ isTaskTableShown && <table className="border-solid border-black border-2">
// 				<thead>
// 					<tr className="border-solid border-black border-2">
// 						<th className="border-solid border-black border-2 p-2">No.</th>
// 						<th className="border-solid border-black border-2 p-2">Todo Item</th>
// 						<th className="border-solid border-black border-2 p-2">Actions</th>
// 					</tr>
// 				</thead>
// 				<tbody>
// 					{state.tasks.map(task=> {
// 						return <tr key={task.id}>
// 							<td className="border-solid border-black border-2 text-center">{task.id}.</td>
// 							<td className="p-2 border-solid border-black border-2">{ task.task }</td>
// 							<td className="">
// 							<button 
// 								onClick={() => {
// 									dispatch({ type: ACTIONS.DELETE_TASK, payload: { id: task.id, task: task.task }})
// 								}} 
// 								className="uppercase p-2 rounded-md font-lg bg-red-600 text-white font-medium"
// 							>
// 								Delete
// 							</button>
// 							<button 
// 								onClick={() => {
// 									dispatch({ type: ACTIONS.FINISHED_TODO, payload: { id: task.id } })
// 								}}
// 								className="uppercase p-2 rounded-md font-lg bg-green-500 text-white font-medium"
// 							>
// 								Finished
// 							</button>
// 							{ !isEditButtonsShown 
// 							? <button 
// 								onClick={enableTaskEditing}
// 								className="uppercase p-2 rounded-md font-lg bg-yellow-500 text-white font-medium"
// 							>
// 								Edit
// 							</button> 
// 							: <div className="flex flex-row gap-4 flex-wrap">
// 								<button
// 									onClick={() => {
// 									dispatch({ type: ACTIONS.EDIT_TASK, payload: { id: task.id, task: editedInputValue } })}}
// 									className="uppercase p-2 rounded-md font-lg bg-blue-600 text-white font-medium"
// 								>
// 									Save
// 								</button>
// 								<button 
// 									className="uppercase p-2 rounded-md font-lg bg-red-600 text-white font-medium"
// 									onClick={cancelTaskEditing}
// 								>
// 									Cancel
// 								</button>
// 							</div>
// 							}
// 						</td>
// 						</tr>
// 					})}
// 				</tbody>
// 			</table> }

// 			TASKS: {state.tasks.map(task => {
// 				return <p key={task.id}>{JSON.stringify(task)}</p>
// 			})} <br />
// 			TASK: {state.task} <br />
// 			IS EDITING: {state.isEditing.toString()} <br />
// 			FILTER: {state.filter}
// 		</div>
// 	)
// }

// export default App;


// const NameContext = createContext();

// const ChildOne = () => {
// 	return (
// 		<div>
// 			<ChildTwo />
// 		</div>
// 	)
// }

// const ChildTwo = () => {
// 	const name = useContext(NameContext)
// 	return (
// 		<div>
// 			<h1>{name}</h1>
// 		</div>
// 	)
// }

// const App = () => {
// 	return(
// 		<div>
// 			<NameContext.Provider value={'marin je ime!'}>
// 				<ChildOne />
// 			</NameContext.Provider>
// 		</div>
// 	)
// }

// export default App;

// import React, { createContext, useContext, useState } from "react";
// import Header from "./components/Layout/Header";
// import Meals from "./components/Meals/Meals";
// import Cart from "./components/Cart/Cart";
// import CartProvider from "./store/CartProvider";

// const App = () => {
// 	const [isModalOpen, setIsModalOpen] = useState(false)
//     const openModal = () => setIsModalOpen(true)
//     const closeModal = () => setIsModalOpen(false)

// 	return(
// 		<CartProvider>
// 			{ isModalOpen && <Cart onModalClose={closeModal} />}
// 			<Header onModalOpen={openModal} />
// 			<main className="bg-red-500 flex items-center justify-center">
// 				<Meals />
// 			</main>
// 		</CartProvider>
// 	)
// }

// export default App;

// import React, { useState, useContext } from "react";
// import { BrowserRouter } from 'react-router-dom';
// import Login from "./apartment_management_app/admin/Login";
// import AdminMainPage from "./apartment_management_app/admin/AdminMainPage";
// import ApartmentProvider from './apartment_management_app/admin/store/ApartmentProvider.jsx'

// const App = () => {
// 	return(
// 		<BrowserRouter>
// 			<ApartmentProvider>
// 				<AdminMainPage />
// 			</ApartmentProvider>
// 		</BrowserRouter>
// 	)
// }

// export default App;

import React from "react";
import ReactDOM from "react-dom";
import MealsImage from './assets/meals.jpg'
import CartIcon from './assets/icons8-shopping-cart-30.png'

const Header = (props) => {
	return (
		<>
			<header className="flex flex-row justify-around items-center px-4 py-4 bg-yellow-300">
				<h1 className="font-poppins text-6xl font-semibold tracking-wide">Foodify</h1>
				<HeaderCartButton />
			</header>
			<div>
				<img
					src={MealsImage}
					alt="Image of Mc meals meals" 
				/>
			</div>
		</>
	)
}

const HeaderCartButton = (props) => {
	return (
		<button className="flex flex-row gap-6 items-center justify-around bg-yellow-600 px-10 py-2 rounded-2xl font-poppins font-semibold text-xl">
			<span>
				<img src={CartIcon} alt="Cart icon" />
			</span>
			<span>Your Cart</span>
			<span className="py-2 px-4 bg-yellow-700 rounded-2xl">3</span>
		</button>
	)
}

const Meals = () => {
	return (
		<>
			<MealsSummary />
			<AvailableMeals />
		</>
	)
}

const MealsSummary = () => {
	return (
		<section className="p-4 font-roboto flex flex-col gap-4 items-center">
			<h2 className="font-bold text-4xl">Delicious food delivered to you</h2>
			<p className="font-semibold text-lg text-center">
				Choose your favorite meal from our broad selection of available
				meals and enjoy a delicious lunch or dinner at home.
			</p>
			<p className="font-semibold text-lg text-center">
				All our meals are cooked with high-quality ingredients,
				just-in-time and of course by experienced chefs!
			</p>
		</section>
	)
}

const AvailableMeals = () => {
	const DUMMY_MEALS = [
		{
		  id: 'm1',
		  name: 'Sushi',
		  description: 'Finest fish and veggies',
		  price: 22.99,
		},
		{
		  id: 'm2',
		  name: 'Schnitzel',
		  description: 'A german specialty!',
		  price: 16.5,
		},
		{
		  id: 'm3',
		  name: 'Barbecue Burger',
		  description: 'American, raw, meaty',
		  price: 12.99,
		},
		{
		  id: 'm4',
		  name: 'Green Bowl',
		  description: 'Healthy...and green...',
		  price: 18.99,
		},
	  ];

	return (
		<section>
			<div className="flex items-center justify-center">
			<Card>
				<ul>
					{DUMMY_MEALS.map(meal =>
						<MealItem
							id={meal.id}
							key={meal.id}
							name={meal.name}
							description={meal.description}
							price={meal.price}
						/>
					)}
				</ul>
			</Card>
			</div>
		</section>
	)
}

const Card = (props) => {
	return (
		<div className="w-[70%] border-2 border-black bg-white m-16 p-4 rounded-xl flex flex-col">
			{props.children}
		</div>
	)
}

const MealItem = ({ name, description, price }) => {
	const decimalPrice = `${price.toFixed(2)}`

	return (
		<li className="flex flex-row items-center justify-between pb-8">
			<div className="p-2">
				<h3 className="font-bold font-poppins text-xl">{name}</h3>
				<div className="italic text-lg font-medium text-gray-700">{description}</div>
				<div className=" text-yellow-600 font-bold text-lg">${decimalPrice}</div>
			</div>
			<div>
				<NewMealItemForm />
			</div>
		</li>
	)
}

const NewMealItemForm = (props) => {
	return (
		<form className="font-poppins flex flex-col items-center justify-center gap-2">
			<Input
				label="Amount"
				input={{
					id: 'amount ' + props.id,
					type: 'number',
					min: '1',
					max: '5',
					step: '1',
					defaultValue: '1'
				}}
			/>
			<button className="font-semibold text-xl rounded-2xl px-10 py-2 text-white bg-yellow-700">+ Add</button>
		</form>
	)
}

const Input = (props) => {
	return (
		<div className="flex flex-row items-center justify-between gap-4">
			<label htmlFor={props.input.id} className='text-lg'>{props.label}</label>
			<input className="border-[1px] border-gray-300 rounded-lg p-1 text-center" {...props.input} />
		</div>
	)
}

// Cart

const Cart = (props) => {
	const cartItems = [{id: '1', name: 'Sushi',  amount: 2, price: 10.99}]

	return (
		<Modal>
			<ul className="">
				{cartItems.map(item =>
					<li className="text-gray-700 mb-2 font-semibold font-poppins text-xl" key={item.id}>{item.name}</li>
				)}
			</ul>
			<div className="flex flex-row items-center mt-4 justify-between font-poppins">
				<span className="font-bold text-2xl">Total Amount</span>
				<span className="font-bold text-2xl">34.78</span>
			</div>
			<div className="flex flex-row p-2 items-center mt-4 justify-end gap-4 font-poppins">
				<button className="font-semibold text-yellow-600 px-10 py-2 border-[1px] border-yellow-600 rounded-2xl">Close</button>
				<button className="font-semibold text-white px-10 py-2 border-[1px] bg-yellow-600 rounded-2xl">Order</button>
			</div>
		</Modal>
	)
}

const Backdrop = (props) => {
    return(
        <div className='fixed z-40 w-screen h-screen flex items-center justify-center bg-gray-900 bg-opacity-70'>
            {props.children}
        </div>
    )
}

const ModalOverlay = (props) => {
    return(
        <Backdrop>
            <div className='bg-white border-black border-2 rounded-2xl p-2
             w-1/2 z-10'>
                <div>{props.children}</div>
            </div>
        </Backdrop>
    )
}

const Modal = (props) => {
  const portalElement = document.getElementById('overlays')

  return (
    <>
        {ReactDOM.createPortal(<Backdrop />, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,
        portalElement)}
    </>
  )
}

const App = () => {
	return (
		<div className="bg-yellow-300">
			<Cart />
			<Header />
			<main>
				<Meals />
			</main>
		</div>
	)
}

export default App;