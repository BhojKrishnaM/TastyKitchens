import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  addCartItem: () => {},
  deleteCartItem: () => {},
  addQuantity: () => {},
  deleteQuantity: () => {},
  emptyCartList: () => {},
})
export default CartContext
