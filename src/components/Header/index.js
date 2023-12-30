import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <div className="navBar">
      <div className="logo-cont">
        <img
          src="https://i.postimg.cc/Nj9NVwWd/Group-7420hat.png"
          alt="website logo"
          className="navLogo"
        />
        <Link to="/" className="navTitleLink">
          <h1 className="navTitle">Tasty Kitchens</h1>
        </Link>
      </div>
      <div className="options-cont">
        <ul className="navMenu">
          <li>
            <Link to="/" className="navLink">
              Home
            </Link>
          </li>
          <li>
            <Link to="/cart" className="navLink1">
              Cart
            </Link>
          </li>
        </ul>
        <button type="button" className="logoutBtn" onClick={onClickLogout}>
          Logout
        </button>
      </div>
    </div>
  )
}

export default withRouter(Header)
