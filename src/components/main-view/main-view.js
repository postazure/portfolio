import React from 'react'
import NavBar from './navbar'
import './main-view.scss'

export default class MainView extends React.Component {
  render() {
    return (
      <div className="main-view">
        <NavBar location={this.props.location.pathname}/>
        {this.props.children}
      </div>
    )
  }
}