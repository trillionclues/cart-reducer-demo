import React from 'react'
import { FaCartPlus } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  const { amount } = useGlobalContext()
  return (
    <div>
      <nav>
        <h1 className='logo'>reducerCart</h1>
        <div className='nav-container'>
          <div className='cart-icon'>
            <FaCartPlus />
            <div className='cart-container'>{amount}</div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
