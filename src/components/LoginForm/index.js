import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="inputLabel" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="passwordField"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="inputLabel" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="usernameField"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    const {showError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-cont">
        <form className="form-cont" onSubmit={this.submitForm}>
          <img
            src="https://i.postimg.cc/Nj9NVwWd/Group-7420hat.png"
            className="login-website-logo-desktop-image"
            alt="website logo"
          />
          <h1 className="heading">Tasty Kitchens</h1>
          <h1 className="login-heading">Login</h1>
          <div className="input-cont">{this.renderUsernameField()}</div>
          <div className="input-cont">{this.renderPasswordField()}</div>
          <button type="submit" className="login-but">
            Login
          </button>
          {showError && <p className="errorMsg">*{errorMsg}</p>}
        </form>
        <img
          src="https://i.postimg.cc/Yq3q27cR/Rectangle-1456-Login-page-img.png"
          className="login-img"
          alt="website login"
        />
      </div>
    )
  }
}

export default LoginForm
