import React from 'react'
import NavBar from './navbar'
import './main-view.scss'

export default class MainView extends React.Component {
  render() {
    return (
      <div className="main-view">
        <NavBar/>
        {this.props.children}
      </div>
    )
  }
}