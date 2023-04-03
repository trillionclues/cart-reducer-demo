import React from 'react'
import { useGlobalContext } from './context'

const Footer = () => {
  const { cartData, clearCart, resetCart } = useGlobalContext()
  // console.log(clearCart)

  if (cartData.length !== 0) {
    return (
      <div className='footer'>
        <div className='footer-container'>
          <div className='footer-total'>
            <h3>Total</h3>
            <button>
              Subtotal: ₦{' '}
              {cartData.reduce((acc, curr) => {
                return acc + curr.price * curr.amount
              }, 0)}
            </button>
          </div>

          <button className='clear-btn' onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </div>
    )
  }

  return <div></div>
}

export default Footer
