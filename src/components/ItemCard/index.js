import {Component} from 'react'
import {BsFillStarFill} from 'react-icons/bs'
import Counter from '../Counter'
import CartContext from '../../Context/CartContext'
import './index.css'

class ItemCard extends Component {
  state = {showCounter: false, quantity: 1}

  onClickAdd = () => {
    this.setState({showCounter: true})
  }

  renderItemCard = () => (
    <CartContext.Consumer>
      {value => {
        const {addCartItem, deleteQuantity, addQuantity} = value
        const {itemDetails} = this.props
        const {name, cost, imageUrl, id, rating} = itemDetails
        const {showCounter, quantity} = this.state

        const onClickAddToCart = () => {
          this.setState({showCounter: true, quantity})
          addCartItem({...itemDetails, quantity})
        }

        const onDecrement = () => {
          if (quantity > 0) {
            this.setState(
              prevState => ({
                quantity: prevState.quantity - 1,
                showCounter: false,
              }),
              deleteQuantity(id),
            )
          }
        }

        const onIncrement = () => {
          this.setState(
            prevState => ({
              quantity: prevState.quantity + 1,
            }),
            addQuantity(id),
          )
        }

        return (
          <li className="item-card" data-testid="foodItem">
            <div>
              <img src={imageUrl} alt="item" className="item-image" />
            </div>
            <div className="item-details">
              <h1 className="item-name">{name}</h1>
              <p className="item-cost">Rs {cost}</p>
              <div className="rating-section">
                <BsFillStarFill className="star1" />
                <p className="rating">{rating}</p>
              </div>
              {showCounter ? (
                <Counter
                  onIncrement={onIncrement}
                  onDecrement={onDecrement}
                  quantity={quantity}
                />
              ) : (
                <button
                  type="button"
                  className="add-btn"
                  onClick={onClickAddToCart}
                >
                  Add
                </button>
              )}
            </div>
          </li>
        )
      }}
    </CartContext.Consumer>
  )

  render() {
    return this.renderItemCard()
  }
}
export default ItemCard
