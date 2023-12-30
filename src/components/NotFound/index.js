import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const NotFound = () => (
  <div className="not-found-page">
    <Header />
    <div className="not-found-container">
      <img
        src="https://i.postimg.cc/NfPQNjCw/erroring-1notfound.png"
        className="not-found-image"
        alt="not found"
      />
      <h1 className="not-found-heading">Page Not Found</h1>
      <p className="not-found-para">
        We are sorry, the page you requested could not be found.
        <br />
        Please go backto the homepage
      </p>
      <Link to="/">
        <button type="button" className="home-button-not-found">
          Home Page
        </button>
      </Link>
    </div>
  </div>
)

export default NotFound
