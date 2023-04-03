import React from 'react'
import { useGlobalContext } from './context'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const CartItem = ({ id, img, price, title, amount }) => {
  const { toggleAmount, removeItem } = useGlobalContext()

  return (
    <div>
      <div className='cart-detail'>
        <div className='cart-item'>
          <img src={img} alt={title} />
          <div className='cart-item-info'>
            <h4>{title}</h4>
            <div className='item-price'>₦ {price}</div>
            <button className='remove-item' onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        </div>
        <div className='cart-amount'>
          <button
            className='amount-btn'
            onClick={() => toggleAmount(id, 'decrease')}
          >
            <BsChevronLeft />
          </button>
          <p className='amount'>{amount}</p>
          <button
            className='amount-btn'
            onClick={() => toggleAmount(id, 'increase')}
          >
            <BsChevronRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
