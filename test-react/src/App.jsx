import { useReducer, useState } from "react";

const ACTIONS = {
	INCREASE_ID: 'increase id',
	SET_TASK: 'set task',
	RESET_TASK: 'reset task',
	ADD_TASK: 'add task',
	DELETE_TASK: 'delete task',
	EDIT_TASK: 'edit task',
	TOGGLE_EDITING: 'toggle editing'
}

function tasksReducer (state, action) {
	switch (action.type) {
		case ACTIONS.SET_TASK: {
			return { ...state, task: action.payload }
		}
		case ACTIONS.RESET_TASK: {
			return { ...state, task: '' }
		}
		case ACTIONS.INCREASE_ID: {
			return { ...state, id: state.id + 1}
		}
		case ACTIONS.ADD_TASK: {
			return { ...state, tasks: [...state.tasks, action.payload] }
		}
		case ACTIONS.DELETE_TASK: {
			return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload.id) }
		}
		// case ACTIONS.EDIT_TASK: {
		// 	return { }
		// }
		case ACTIONS.TOGGLE_EDITING: {
			return { ...state, isEditing: !state.isEditing }
		}
	}
}

const App = () => {
	const [state, dispatch] = useReducer(tasksReducer, { task: '', id: 1, tasks: [], isEditing: false })
	const [isTaskTableShown, setIsTaskTableShown] = useState(false)
	// const [isEditing, setIsEditing] = useState(false)

	const inputHandler = (e) => {
		dispatch({ type: ACTIONS.SET_TASK, payload: e.target.value })
	}

	const showTaskTableHandler = () => setIsTaskTableShown(prev => !prev)

	const submitHandler = (e) => {
		e.preventDefault()
		if (state.task === '') return

		dispatch({ type: ACTIONS.RESET_TASK })
		dispatch({ type: ACTIONS.INCREASE_ID })
		dispatch({ type: ACTIONS.ADD_TASK, payload: { id: state.id, task: state.task }})
		setIsTaskTableShown(true)
	}

	return (
		<div className="font-robotoSlab">
			<h1 className="text-center font-semibold text-4xl">To Do App</h1>
			<form onSubmit={submitHandler} className='flex gap-2'>
				<input
					className=" m-4 p-2 border-[1px] border-slate-300 rounded-md placeholder-slate-600 outline-black outline-2"
					type="text"
					placeholder="Enter a task here"
					onChange={inputHandler}
					value={state.task}
				/>
				<button className="uppercase m-5 p-2 rounded-md font-lg bg-blue-600 text-white font-medium">Add Task</button>
			</form>
			<div className="flex gap-6 m-4">
				<button 
					onClick={showTaskTableHandler} 
					className="uppercase p-2 rounded-md font-lg bg-green-500 text-white font-medium"
				>
					{ !isTaskTableShown ? 'Show Tasks' : 'Hide Tasks' }
				</button>
			</div>
			{ isTaskTableShown && <table className="border-solid border-black border-2">
				<thead>
					<tr className="border-solid border-black border-2">
						<th className="border-solid border-black border-2 p-2">No.</th>
						<th className="border-solid border-black border-2 p-2">Todo Item</th>
						<th className="border-solid border-black border-2 p-2">Actions</th>
					</tr>
				</thead>
				<tbody>
					{state.tasks.map(task=> {
						return <tr key={task.id}>
							<td className="border-solid border-black border-2 text-center">{task.id}.</td>
							<td className="p-2 border-solid border-black border-2">{!state.isEditing ? task.task : <input />}</td>
							<td className="flex flex-row gap-4 p-3 flex-wrap">
							<button 
								onClick={() => {
									dispatch({ type: ACTIONS.DELETE_TASK, payload: { id: task.id }})
								}} 
								className="uppercase p-2 rounded-md font-lg bg-red-600 text-white font-medium"
							>
								Delete
							</button>
							<button 
								className="uppercase p-2 rounded-md font-lg bg-green-500 text-white font-medium"
							>
								Finished
							</button>
							<button 
								onClick={() => {
									// dispatch({ type: ACTIONS.EDIT_TASK, payload: { id: task.id }})
									// setIsEditing(prev => !prev)
									dispatch({ type: ACTIONS.TOGGLE_EDITING })
								}}
								className="uppercase p-2 rounded-md font-lg bg-yellow-500 text-white font-medium"
							>
								Edit
							</button>
						</td>
						</tr>
					})}
				</tbody>
			</table> }

			TASKS: {state.tasks.map(task => {
				return <p key={task.id}>{JSON.stringify(task)}</p>
			})} <br />
		</div>
	)
}

export default App;