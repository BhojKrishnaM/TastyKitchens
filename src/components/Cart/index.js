import Header from '../Header'
import Footer from '../Footer'
import CartContext from '../../Context/CartContext'
import CartListView from '../CartListView'
import EmptyCartView from '../EmptyCartView'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const showEmptyView = cartList.length === 0
      return (
        <>
          <Header />
          {showEmptyView ? <EmptyCartView /> : <CartListView />}
          <Footer />
        </>
      )
    }}
  </CartContext.Consumer>
)

export default Cart
