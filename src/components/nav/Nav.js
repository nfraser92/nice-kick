import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
class Nav extends Component {
  logout = () => {
    sessionStorage.clear("credentials")
    this.props.setAuth()
  }

  render() {
    return (
      <nav style={{backgroundColor:"white"}}className= "navbar navbar-light fixed-top light-green flex-md-nowrap p-0 shadow">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              NiceKick!
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/users">
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/sessions">
              Sessions
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/locations">
              Fields
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/friends">
              Friends
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/chats">
              Chats
            </Link>
          </li>
        </ul>
        <button
          type="button"
          className="btn btn-outline-info"
          onClick={this.logout}>
          Logout
        </button>
      </nav>
    )
  }
}

export default Nav
