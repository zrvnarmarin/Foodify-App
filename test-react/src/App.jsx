import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion'
import MotionFramerTest from './components/MotionFramerTest.jsx'
import { elementVariant, personCardsVariant, personCardVariant } from './data/variants'
import { persons } from './data/persons.js'
import TestApp from './test/TestApp'

const FormWrapper = (props) => {
  return (
    <motion.div
      variants={elementVariant}
      initial="hidden"
      animate="visible"
      className='bg-green-700 border-4 border-black rounded-xl p-10 w-1/4'
    >
      {props.children}
    </motion.div>
  )
}

const NewPersonForm = ({onSaveNewPerson}) => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [placeOfResidence, setPlaceOfResidence] = useState('')

  const nameInputHandler = e => setName(e.target.value)
  const ageInputHandler = e => setAge(e.target.value)
  const placeOfResidenceInputHandler = e => setPlaceOfResidence(e.target.value)

  const formSubmitHandler = (e) => {
    e.preventDefault()

    const newPersonObject = {
      name: name,
      age: age,
      placeOfResidence: placeOfResidence
    }

    onSaveNewPerson(newPersonObject)
    resetForm()
  }

  const resetForm = () => {
    setName('')
    setAge('')
    setPlaceOfResidence('')
  }

  return(
    <form 
      onSubmit={formSubmitHandler} 
      className='bg-green-300 rounded-2xl p-8 border-solid border-black flex flex-col justify-center items-center gap-8'
    >
      <input onChange={nameInputHandler} value={name} className='p-2 rounded outline-red' type="text" placeholder='Enter name...' />
      <input onChange={ageInputHandler} value={age} className='p-2 rounded outline-red' type="text" placeholder='Enter age...' />
      <input onChange={placeOfResidenceInputHandler} value={placeOfResidence} className='p-2 rounded outline-red' type="text" placeholder='Enter place of residence...' />
      <button className='px-6 py-2 text-white bg-green-500 text-2xl uppercase rounded-md'>Submit</button>
    </form>
  )
}

const NewPerson = ({onAddNewPerson}) => {

  const saveNewPerson = (newPersonObject) => {
    const newPerson = {
      ...newPersonObject,
      id: Math.floor(Math.random() * 1000)
    }

    onAddNewPerson(newPerson)
  }
  
  return (
    <>
      <NewPersonForm onSaveNewPerson={saveNewPerson} />
    </>
  )
}

const PersonCardWrapper = (props) => {
  return (
    <motion.div
      variants={personCardsVariant}
      initial="hidden"
      animate="visible" 
      className='bg-green-500 p-4 border-black border-2 rounded-xl flex flex-row gap-2 mt-4 max-w-3/4'>
      {props.children}
    </motion.div>
  )
}

const PersonCard = ({persons}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [active, setActive] = useState({})

  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <PersonCardWrapper>
        {persons.map(person =>
          <motion.div
            variants={personCardVariant}
            key={person.id}
            onClick={() => {
              setActive(person)
              setIsModalOpen(true)
            }}
            className='bg-yellow-500 border-2 border-black w-full text-center p-2 flex cursor-pointer'
          >
            <div 
              key={person.id} 
              className='flex gap-2 items-center'
            >
              <span className='text-sm bg-yellow-700 text-white p-1'>{`#${person.id}`}</span>
              <p className='text-black uppercase text-2xl'>{person.name}</p>
            </div>
          </motion.div>
        )}
      </PersonCardWrapper>
      
      { isModalOpen && createPortal(<CardInfoModal onCloseModal={closeModal} activeUser={active} />, document.getElementById('modal-overlay')) }
    </>
  )
}

const CardInfoModalWrapper = (props) => {
  return (
    <motion.div 
    initial={{ opacity: 0}}
    animate={{ opacity: 1 }}
    transition={{ type: 'spring', delay: 0.2 }}
    className='w-screen h-screen bg-black bg-opacity-95 z-40 absolute top-0 left-0 flex flex-col justify-center items-center'
    >
      {props.children}
    </motion.div>
  )
}

const CardInfoModal = ({onCloseModal, activeUser}) => {
  console.log(activeUser)
  return (
    <CardInfoModalWrapper>
      <div className='flex bg-white p-4 rounded-xl border-2 border-black flex-col w-1/2'>
        <div className='flex gap-2 items-center justify-center'>
          <p className='text-md bg-black rounded-xl p-1 text-white flex items-center'>#{activeUser.id}</p>
          <p className='text-4xl uppercase font-semibold'>{activeUser.name}</p>
        </div>
        <div className='flex flex-row items-center justify-around'>
          <span className='text-normal uppercase font-bold'>Age: </span>
          <p className='text-2xl uppercase font-bold'>{activeUser.age}</p>
        </div>
        <div className='flex flex-row items-center justify-around'>
          <span className='text-normal uppercase font-bold'>Residence: </span>
          <p className='text-2xl uppercase font-bold text-black'>{activeUser.placeOfResidence}</p>
        </div>
        <div className='flex flex-row gap-4 items-center justify-center mt-8'>
          <button onClick={onCloseModal} className='bg-green-600 rounded-2xl p-6 text-white uppercase text-4xl w-3/4'>Close</button>
        </div>
      </div>
      
    </CardInfoModalWrapper>
  )
}

const LoginPage = ({ onLogin }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const emailChangeHandler = (e) => setEmail(e.target.value)
  const passwordChangeHandler = (e) => setPassword(e.target.value)

  const formSubmitHandler = (e) => {
    e.preventDefault()
    onLogin()
  }

  return (
    <form onSubmit={formSubmitHandler} className='w-1/2 rounded-xl bg-red-500 p-6 flex flex-col gap-2'>
      <input value={email} onChange={emailChangeHandler} className={`text-black p-2 rounded flex-1`} type="text" placeholder='Enter email...' />
      <input value={password} onChange={passwordChangeHandler} className={`text-black p-2 rounded flex-1`} type="text" placeholder='Enter password...' />
      <button className='p-4 text-black uppercase font-2xl rounded-xl bg-red-300 border-2 border-black'>Submit</button>
    </form>
  )
}

const UserProfilePage = ({onLogout}) => {

  const logoutClickHandler = () => {
    onLogout()
    
  }
  return (
    <div className='flex flex-col gap-10'>
      <h1 className='text-6xl '>Welcome back!</h1>
      <button onClick={logoutClickHandler} className='p-6 bg-red-700 text-white uppercase font-xl rounded-2xl border-black border-1'>Logout</button>
    </div>
  )
}

function App() {
  // const [personArray, setPersonArray] = useState(persons)
  // const [isShowPersonCards, setIsShowPersonCards] = useState(false)
  // const [isShowForm, setIsShowForm] = useState(false)

  // const addPerson = (personObject) => setPersonArray(persons => [...persons, personObject])
  // const togglePersonCards = () => setIsShowPersonCards(prev => !prev)
  // const toggleForm = () => setIsShowForm(prev => !prev)

  // return (
  //   <div className='flex flex-col justify-center items-center'>
  //     { isShowForm && <FormWrapper>
  //       <NewPerson onAddNewPerson={addPerson} />
  //     </FormWrapper>}

  //     <button 
  //       onClick={toggleForm}
  //       className='px-6 py-2 text-white bg-green-500 text-2xl uppercase rounded-md mt-4'
  //     >
  //       {!isShowForm ? 'Enter New Person' : 'Cancel'}
  //     </button>

  //     <button 
  //       onClick={togglePersonCards}
  //       className='px-6 py-2 text-white bg-green-500 text-2xl uppercase rounded-md mt-4'
  //     >
  //       {isShowPersonCards ? 'Hide Persons' : 'Show Persons'}
  //     </button>

  //     {isShowPersonCards && <PersonCard persons={personArray} />}
  //   </div>
  // )

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const loginHandler = () => {
    localStorage.setItem('isLoggedIn', '1')
    setIsLoggedIn(true)
  }

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false)
  }

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn' === '1')) {
      setIsLoggedIn(true)
    }
  }, [])

  return (
    // <TestApp />
    <>
      { !isLoggedIn && <LoginPage onLogin={loginHandler} /> }
      { isLoggedIn && <UserProfilePage onLogout={logoutHandler} /> }

    </>
  )
  
}

export default App
