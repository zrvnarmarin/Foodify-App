import React from 'react'
import { useReducer } from 'react'

const ACTIONS = {
    SET_NAME: 'set name',
    SET_NUMBER: 'set number',
    ADD_PERSON: 'add person',
    DELETE_PERSON: 'delete person'
}

function reducer (state, action) {
    switch (action.type) {
        case ACTIONS.SET_NAME: {
            return { ...state, name: action.payload}
        }
        case ACTIONS.SET_NUMBER: {
            return { ...state, number: action.payload}
        }
        case ACTIONS.ADD_PERSON: {
            return { ...state, persons: [...state.persons, action.payload]}
        }
        case ACTIONS.DELETE_PERSON: {
            return {...state, persons: state.persons.filter(person => person.id !== action.payload.id)}
        }
    }
}

const Patients = () => {
    const [state, dispatch] = useReducer(reducer, { name: '', number: '', persons: []})
    const nameHandler = (e) => {
        dispatch({type: ACTIONS.SET_NAME, payload: e.target.value})
    }
    const numberHandler = (e) => {
        dispatch({type: ACTIONS.SET_NUMBER, payload: e.target.value})
    }
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch({type: ACTIONS.ADD_PERSON, payload: { 
            id: Math.floor((1 + Math.random()) * 0x10000),  
            name: state.name, 
            number: state.number,
        }})
    }

  return (
    <div>
        <div>
            <form onSubmit={submitHandler}>
                <input onChange={nameHandler} type="text" />
                <input onChange={numberHandler} type="text" />
                <button>Submit</button>
            </form>
            <br /> <br />
            {state.persons.map(person => {
                return <div key={person.id}>
                    <p>{person.name}</p>
                    <button onClick={() => dispatch({type: ACTIONS.DELETE_PERSON, payload: { id: person.id }})}>Delete PErson</button>
                </div>
            } )}
        </div>
    </div>
  )
}

export default Patients