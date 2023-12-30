import {Link} from 'react-router-dom'
import './index.css'

const EmptyCartView = () => (
  <div className="empty-cart-container">
    <img
      src="https://i.postimg.cc/QxKCndmF/OBJECTSempty-view.png"
      className="empty-cart-image"
      alt="empty cart"
    />
    <h1 className="empty-card-heading">No Order Yet!</h1>
    <p className="empty-card-para">
      Your cart is empty. Add something from the menu.
    </p>
    <Link to="/">
      <button type="button" className="order-now-btn">
        Order Now
      </button>
    </Link>
  </div>
)

export default EmptyCartView
