import {
  REMOVE_ITEM,
  CLEAR_CART,
  RESET_CART,
  LOADING,
  CART_TOTAL,
  DISPLAY_ITEMS,
  TOGGLE_AMOUNT,
} from './actions'

export const reducer = (state, action) => {
  // remove item
  if (action.type === REMOVE_ITEM) {
    return {
      ...state,
      cartData: state.cartData.filter((item) => item.id !== action.payload),
    }
  }

  // toggle Amount
  if (action.type == TOGGLE_AMOUNT) {
    return {
      ...state,
      cartData: state.cartData
        .map((item) => {
          if (item.id === action.payload.id) {
            if (action.payload.toggle === 'increase') {
              return { ...item, amount: item.amount + 1 }
            }
            if (action.payload.toggle === 'decrease') {
              return { ...item, amount: item.amount - 1 }
            }
          }
          return item
        })
        .filter(
          (
            item // filter out items with amount of 0
          ) => item.amount !== 0
        ),
    }
  }

  // clear entire cart
  if (action.type === CLEAR_CART) {
    return { ...state, cartData: [] }
  }

  // check if items are fetched
  if (action.type === LOADING) {
    return {
      ...state,
      loading: true,
    }
  }

  // display items when fetched and stop loading
  if (action.type === DISPLAY_ITEMS) {
    return { ...state, cartData: action.payload, loading: false }
  }

  // reset cart with items
  if (action.type === RESET_CART) {
    return { ...state, cartData: action.payload }
  }

  if (action.type === CART_TOTAL) {
    // DISPLAY CART_TOTAL
    let { total, amount } = state.cartData.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem
        const itemTotal = price * amount

        cartTotal.total += itemTotal
        cartTotal.amount += amount
        return cartTotal
      },

      {
        total: 0,
        amount: 0,
      }
    )
    total = parseFloat(total.toFixed(2))
    return { ...state, total, amount }
  }

  return {
    ...state,
  }
  throw new Error('No matching type!')
}
