import React from 'react'
import {Link} from 'react-router'

import './navbar.scss'

export default class NavBar extends React.Component {
  render() {
    return(
      <ul className="navbar">
        <li><Link to="/">About</Link></li>
        <li><Link to="/apps">Apps</Link></li>
        <li><Link to="/games">Games</Link></li>
      </ul>
    )
  }
}