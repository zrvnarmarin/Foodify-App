import { useReducer, useState } from "react";

const ACTIONS = {
	SET_TASK: 'set task',
	RESET_TASK: 'reset task',
	ADD_TASK: 'add task',
	DELETE_TASK: 'delete task',
	EDIT_TASK: 'edit task'
}

function tasksReducer (state, action) {
	switch (action.type) {
		case SET_TASK: {
			return { ...state, task: action.payload } 
		}
		case RESET_TASK: {
			return { ...state, task: '' }
		}
		// case ADD_TASK: {
		// 	return {}
		// }
		// case DELETE_TASK: {
		// 	return {}
		// }
		// case EDIT_TASK: {
		// 	return {}
		// }
	}
}

const App = () => {
	const [state, dispatch] = useReducer(tasksReducer, { task: '', tasks: [] } )

	const inputHandler = (e) => {
		console.log('hej')
		dispatch({ type: ACTIONS.SET_TASK, payload: e.target.value })
	}

	const addTaskHandler = (e) => {
		dispatch({ type: ACTIONS.ADD_TASK })
	}

	return (
		<div className="font-robotoSlab">
			<h1 className="text-center font-semibold text-4xl">To Do App</h1>
			<input
				className="flex flex-row w-full p-1 m-4 border-[1px] border-slate-300 rounded-md placeholder-slate-600 outline-black outline-2"
				type="text" 
				placeholder="Enter a task here" 
				onChange={inputHandler} 
			/>
			<div className="flex gap-6 m-4">
				<button onClick={addTaskHandler} className="uppercase p-2 rounded-md font-lg bg-blue-600 text-white font-medium">Add Task</button>
				<button className="uppercase p-2 rounded-md font-lg bg-yellow-500 text-white font-medium">View All Open Tasks</button>
				<button className="uppercase p-2 rounded-md font-lg bg-green-500 text-white font-medium">Show Tasks</button>
			</div>
			<table className="border-solid border-black border-2">
				<thead>
					<tr className="border-solid border-black border-2">
						<th className="border-solid border-black border-2 p-2">No.</th>
						<th className="border-solid border-black border-2 p-2">Todo Item</th>
						<th className="border-solid border-black border-2 p-2">Actions</th>
					</tr>
				</thead>
				<tbody>
					<tr className="border-solid border-black border-2">
						<td className="border-solid border-black border-2 text-center">1.</td>
						<td className="p-2 border-solid border-black border-2">Buy groceries for today</td>
						<td className="flex flex-row gap-4 p-3 flex-wrap">
							<button className="uppercase p-2 rounded-md font-lg bg-red-600 text-white font-medium">Delete</button>
							<button className="uppercase p-2 rounded-md font-lg bg-green-500 text-white font-medium">Finished</button>
						</td>
					</tr>
				</tbody>
			</table>
			TASK: {state.task}
		</div>
	)
}

export default App;