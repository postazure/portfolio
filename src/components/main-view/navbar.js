import React from 'react'
import {Link} from 'react-router'

import './navbar.scss'

export default class NavBar extends React.Component {

  renderLink(content, path){
    let isActive = this.props.location === path;
    let classNames = isActive ? "active" : "";
    return <Link to={path} className={classNames}>{content}</Link>
  }

  render() {
    return(
      <ul className="navbar">
        <li>{this.renderLink("About", "/")}</li>
        <li>{this.renderLink("Apps", "/apps")}</li>
        <li>{this.renderLink("Games", "/games")}</li>
      </ul>
    )
  }
}