import CartContext from '../../Context/CartContext'
import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {addQuantity, deleteQuantity} = value
      const {cartItemDetails} = props
      const {name, cost, imageUrl, id, quantity} = cartItemDetails

      const onClickMinus = () => {
        deleteQuantity(id)
      }

      const onClickPlus = () => {
        addQuantity(id)
      }

      return (
        <li className="cart-item">
          <div className="item-display">
            <img
              src={imageUrl}
              className="cart-item-display-image"
              alt={name}
            />
            <h1 className="item-name">{name}</h1>
          </div>
          <div className="quantity-control">
            <button
              type="button"
              className="cart-list-quantity-button"
              onClick={onClickMinus}
              data-testid="decrement-quantity"
            >
              -
            </button>
            <p className="cart-list-item-quantity" data-testid="item-quantity">
              {quantity}
            </p>
            <button
              type="button"
              className="cart-list-quantity-button"
              onClick={onClickPlus}
              data-testid="increment-quantity"
            >
              +
            </button>
          </div>
          <p className="cart-item-cost-style">Rs {cost * quantity}</p>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
