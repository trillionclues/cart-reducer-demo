import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from './context'

const CartContainer = () => {
  const { cartData, resetCart, fetchCart } = useGlobalContext()
  // console.log(data)

  if (!cartData || cartData.length === 0) {
    return (
      <section>
        <div className='no-item'>
          <h3
            style={{
              textAlign: 'center',
              textTransform: 'initial',
            }}
          >
            Your bag...is currently empty
          </h3>
          <button className='reset-cart' onClick={fetchCart}>
            reset cart
          </button>
        </div>
      </section>
    )
  }

  return (
    <div>
      <div className='container'>
        <h1 className='home-text'>Your Bag</h1>
        {cartData.map((cart) => {
          // console.log(cart)
          return (
            <div className='cart-body' key={cart.id}>
              <CartItem {...cart} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CartContainer
