import React, { useState, useReducer } from 'react'
import Navbar from './Navbar'
import CartContainer from './CartContainer'
import Loading from './Loading'
import Footer from './Footer'
import { useGlobalContext } from './context'

function App() {
  const { loading } = useGlobalContext()

  if (loading) {
    return <Loading />
  }
  return (
    <div className='App'>
      <Navbar />
      <CartContainer />
      <Footer />
    </div>
  )
}

export default App
