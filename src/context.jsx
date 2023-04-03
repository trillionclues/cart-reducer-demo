import React, { createContext, useContext, useEffect, useReducer } from 'react'

import { reducer } from './reducer'
const url = 'https://course-api.com/react-useReducer-cart-project'

const AppContext = createContext()

const initialState = {
  loading: false,
  cartData: [],
  total: 0,
  amount: 0,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // fetch cart data
  const fetchCart = async () => {
    dispatch({ type: 'LOADING' })
    const response = await fetch(url)
    const cart = await response.json()
    dispatch({ type: 'DISPLAY_ITEMS', payload: cart })
  }

  // remove item
  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
    console.log(
      'remove item',
      state.cartData.filter((cart) => cart.id !== id)
    )
  }

  // reset cart
  const resetCart = () => {
    //  dispatch({ type: 'LOADING' })
    //   const response = await fetch(url)
    //   const cart = await response.json()
    // dispatch({ type: 'DISPLAY_ITEMS', payload: cart })
  }

  // clear cart
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  // togglePrice
  const toggleAmount = (id, toggle) => {
    dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, toggle } })
  }

  useEffect(() => {
    fetchCart()
  }, [])

  useEffect(() => {
    dispatch({ type: 'CART_TOTAL' })
  }, [state.cartData])
  // console.log(state.cartData)

  return (
    <AppContext.Provider
      value={{
        ...state,
        removeItem,
        clearCart,
        toggleAmount,
        resetCart,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
