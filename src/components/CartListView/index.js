import {Link} from 'react-router-dom'
import CartContext from '../../Context/CartContext'

import CartItem from '../CartItem'
import './index.css'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, emptyCartList} = value
      let total = 0
      cartList.forEach(eachItem => {
        total += eachItem.quantity * eachItem.cost
      })

      const onClickPlaceOrder = () => {
        emptyCartList()
      }

      return (
        <>
          <ul className="cart-list">
            <div className="cart-header-items">
              <p className="cart-title-heading1">Item</p>
              <p className="cart-title-heading1">Quantity</p>
              <p className="cart-title-heading1">Price</p>
            </div>
            {cartList.map(cartItem => (
              <CartItem cartItemDetails={cartItem} key={cartItem.id} />
            ))}
          </ul>
          <hr className="cart-list-line" />
          <div className="order-total">
            <h1 className="order">Order Total:</h1>
            <p className="total" data-testid="total-price">
              Rs {total}.00
            </p>
          </div>
          <div className="place-order">
            <Link to="/payment">
              <button
                type="button"
                className="place-order-btn"
                onClick={onClickPlaceOrder}
              >
                Place Order
              </button>
            </Link>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView
