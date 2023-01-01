import React from 'react'
import MealsImage from '../../assets/meals.jpg'

const Header = (props) => {
  return (
    <>
        <header className=''>
            <h1></h1>React MNeals
            <button>Cart</button>
        </header>
        <div>
            <img src={MealsImage} alt="Table fuul of food" />
        </div>
    </>
  )
}

export default Header;